import { Injectable } from '@angular/core';
import { Indexer } from 'algosdk';
import { Observable, from, map, tap, mergeMap, of } from 'rxjs';
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

  getAccountAssets(account: string): Observable<AssetHolding> {
    return from(this.indexerClient.lookupAccountAssets(account).do()).pipe(
      map((res: any) => {
        return res['assets'];
      }),
      mergeMap((res: AssetHolding[]) => of(...res))
    );
  }

  getAssetById(assetId: number): Observable<Asset> {
    return from(this.indexerClient.lookupAssetByID(assetId as number).do()).pipe(
      map((response) => {
        return response['asset'];
      })
    );
  }
}
