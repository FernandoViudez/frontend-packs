import { Injectable } from '@angular/core';
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

  async getHoldingPacks(account: string) {
    const accAssets = await this.getAccountAssets(account);
    return await this.filterOfficialPacks(accAssets);
  }

  private async filterOfficialPacks(accountAssets: AssetHolding[]): Promise<Asset[]> {
    const packs: Asset[] = [];
    for (let asset of accountAssets) {
      if (asset.amount > 0 && !asset['is-frozen']) {
        const holdingAsset = await this.getAssetById(asset['asset-id'] as number);
        if (this.isOfficialPack(holdingAsset)) {
          packs.push(holdingAsset);
        }
      }
    }
    return packs;
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
