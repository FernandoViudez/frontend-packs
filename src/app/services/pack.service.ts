import { Injectable } from '@angular/core';
import { filter, mergeMap, Observable, toArray } from 'rxjs';
import { environment } from '../../environments/environment';
import { AssetHolding } from '../interfaces/asset-holding.interface';
import { Asset } from '../interfaces/asset-interface';
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
      filter((val) => val.amount > 0 && !val['is-frozen']),
      mergeMap((res) => this.getAssetById(res['asset-id'])),
      filter((asset) => this.isOfficialPack(asset)),
      toArray()
    );
  }

  private isOfficialPack(asset: Asset) {
    return (
      asset.params.creator == environment.pack.creator &&
      asset.params['unit-name'] == environment.pack.unitName &&
      asset.params.manager == environment.pack.manager &&
      asset.params.reserve != zeroAddress &&
      asset.params.decimals == 0 &&
      asset.params.total == 1
    );
  }
}
