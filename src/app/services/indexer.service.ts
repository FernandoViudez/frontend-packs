import { Injectable } from '@angular/core';
import { Indexer } from 'algosdk';
import { environment } from '../../environments/environment';
import { AssetHolding } from '../interfaces/asset-holding.interface';
import { Asset } from '../interfaces/asset-interface';

@Injectable({
  providedIn: 'root',
})
export class IndexerService {
  protected indexerClient: Indexer;

  constructor() {
    this.indexerClient = new Indexer(
      environment.indexer.token,
      environment.indexer.server,
      environment.indexer.port
    );
  }

  async getAccountAssets(account: string) {
    const response: Record<string, AssetHolding[]> = await this.indexerClient
      .lookupAccountAssets(account)
      .do();
    return response['assets'];
  }

  async getAssetById(assetId: number): Promise<Asset> {
    const assetResponse: Record<string, Asset> = await this.indexerClient
      .lookupAssetByID(assetId as number)
      .do();
    return assetResponse['asset'];
  }
}
