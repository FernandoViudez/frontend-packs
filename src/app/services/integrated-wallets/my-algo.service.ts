import { Injectable } from '@angular/core';
import MyAlgoConnect, { Accounts } from '@randlabs/myalgo-connect';
import { from, map, Observable } from 'rxjs';
import { BlockchainService } from '../../base/blockchain-service.base';
import { Account } from '../../interfaces/account.interface';

@Injectable({
  providedIn: 'root',
})
export class MyAlgoService extends BlockchainService {
  private readonly myAlgoWallet: MyAlgoConnect = new MyAlgoConnect();

  constructor() {
    super();
  }

  connectWallet(): Observable<Account> {
    return from(this.myAlgoWallet.connect()).pipe(
      map(([account]: Accounts[]) => ({
        walletAddress: account.address,
        name: account.name,
      }))
    );
  }
}
