import { Injectable } from '@angular/core';
import { filter, mergeMap, Observable, toArray } from 'rxjs';
import { environment } from '../../environments/environment';
import { AssetHolding } from '../interfaces/asset-holding.interface';
import { Asset } from '../interfaces/asset.interface';
import { zeroAddress } from '../utils/algo.utils';
import { IndexerService } from './indexer.service';

@Injectable({
  providedIn: 'root',
})
export class PackService extends IndexerService {
  constructor() {
    super();
  }

  getHoldingPacks(account: string) {
    return this.filterOfficialPacks(this.getAccountAssets(account));
  }

  private filterOfficialPacks(accountAssets: Observable<AssetHolding>) {
    return accountAssets.pipe(
      filter((val) => val.amount > 0 && !val.isFrozen),
      mergeMap((res) => this.getAssetById(res.assetId)),
      filter((asset) => this.isOfficialPack(asset)),
      toArray()
    );
  }

  private isOfficialPack(asset: Asset) {
    return (
      asset.creator == environment.pack.creator &&
      asset.unitName == environment.pack.unitName &&
      asset.manager == environment.pack.manager &&
      asset.reserve != zeroAddress &&
      asset.decimals == 0 &&
      asset.total == 1
    );
  }
}
