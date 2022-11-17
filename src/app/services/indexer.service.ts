import { Injectable } from '@angular/core';
import { Indexer } from 'algosdk';
import { Observable, from, map, tap, mergeMap, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { AssetHolding } from '../interfaces/asset-holding.interface';
import { Asset } from '../interfaces/asset.interface';
import { IndexerAssetHolding } from '../interfaces/indexer/asset-holding.interface';
import { mapAsset, mapAssetHolding } from '../utils/algo.utils';

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

  getAccountAssets(account: string): Observable<AssetHolding> {
    return from(this.indexerClient.lookupAccountAssets(account).do()).pipe(
      map((res: any) => {
        return res['assets'];
      }),
      mergeMap((res: IndexerAssetHolding[]) => of(...res)),
      map((assetHolding) => mapAssetHolding(assetHolding))
    );
  }

  getAssetById(assetId: number): Observable<Asset> {
    return from(this.indexerClient.lookupAssetByID(assetId as number).do()).pipe(
      map((response) => mapAsset(response['asset']))
    );
  }
}
