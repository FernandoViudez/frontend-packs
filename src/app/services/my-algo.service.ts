import { Injectable } from '@angular/core';
import MyAlgoConnect, { Accounts } from '@randlabs/myalgo-connect';
import { catchError, from, Observable, tap, throwError } from 'rxjs';
import { BlockchainService } from '../base/blockchain-service.base';

@Injectable({
  providedIn: 'root',
})
export class MyAlgoService extends BlockchainService<Accounts[]> {
  private readonly myAlgoWallet: MyAlgoConnect = new MyAlgoConnect();
  private account!: Accounts;

  constructor() {
    super();
  }

  connectWallet(): Observable<Accounts[]> {
    return from(this.myAlgoWallet.connect()).pipe(
      tap((response) => (this.account = response[0])),
      catchError((error) => throwError(() => new Error(error)))
    );
  }
}
