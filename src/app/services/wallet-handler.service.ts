/* eslint-disable indent */
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { LS_KEY, WalletState } from '../guards/wallet-is-connected/wallet-states';
import { Account } from '../interfaces/account.interface';
import { IntegratedWallet } from './integrated-wallets/integrated-wallets';
import { MyAlgoService } from './integrated-wallets/my-algo.service';
import { PeraWalletService } from './integrated-wallets/pera-wallet.service';

@Injectable({
  providedIn: 'root',
})
export class WalletHandlerService {
  private account!: Account;

  constructor(private myAlgo: MyAlgoService, private readonly peraWallet: PeraWalletService) {}

  connectWalletByIntegrationSelected(wallet: IntegratedWallet): Observable<Account> {
    switch (wallet) {
      // eslint-disable-next-line indent
      case IntegratedWallet.myAlgo:
        return this.myAlgo.connectWallet().pipe(tap(this.saveAccountInfo.bind(this)));
      case IntegratedWallet.peraWallet:
        return this.peraWallet.connectWallet().pipe(tap(this.saveAccountInfo.bind(this)));
      default:
        localStorage.setItem(LS_KEY, WalletState.error);
        return throwError(() => new Error('INTEGRATION_NOT_IMPLEMENTED'));
    }
  }

  private saveAccountInfo(account: Account): void {
    this.account = account;
    localStorage.setItem(LS_KEY, WalletState.connected);
  }

  get Account() {
    return this.account;
  }
}
