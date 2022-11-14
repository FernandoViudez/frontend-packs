/* eslint-disable indent */
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { LS_KEY, WalletState } from '../guards/wallet-is-connected/wallet-states';
import { Account } from '../interfaces/account.interface';
import { ConnectionAttemptFailed } from '../interfaces/connection-attempt.-failed.interface';
import { IntegratedWallet } from './integrated-wallets/integrated-wallets';
import { MyAlgoService } from './integrated-wallets/my-algo.service';
import { PeraWalletService } from './integrated-wallets/pera-wallet.service';
import { WalletErrorCode, WalletErrorMessage } from './integrated-wallets/wallet-error';

@Injectable({
  providedIn: 'root',
})
export class WalletHandlerService {
  private account!: Account;

  constructor(private myAlgo: MyAlgoService, private readonly peraWallet: PeraWalletService) {}

  connectWalletByIntegrationSelected(
    wallet: IntegratedWallet
  ): Observable<Account | ConnectionAttemptFailed> {
    if (!this[wallet]) return this.handleWalletNotSupportedException();
    return this.handleWalletConnection(this[wallet].connectWallet());
  }

  private handleWalletNotSupportedException(): Observable<Account | ConnectionAttemptFailed> {
    localStorage.setItem(LS_KEY, WalletState.error);
    return of({
      errorMessage: WalletErrorCode.connectionMethodNotSupported,
      logs: null,
    } as ConnectionAttemptFailed);
  }

  private handleWalletConnection(
    connectionAttempt: Observable<Account>
  ): Observable<Account | ConnectionAttemptFailed> {
    return connectionAttempt.pipe(
      map((response) => {
        this.saveAccountInfo(response);
        return response;
      }),
      catchError((error) =>
        of({
          errorCode: WalletErrorCode.errorTryingToConnect,
          errorMessage: error?.message || WalletErrorMessage.errorTryingToConnect,
          logs: error,
        } as ConnectionAttemptFailed)
      )
    );
  }

  private saveAccountInfo(account: Account): void {
    this.account = account;
    localStorage.setItem(LS_KEY, WalletState.connected);
  }

  get Account() {
    return this.account;
  }
}
