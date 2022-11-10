import { Injectable } from '@angular/core';
import { PeraWalletConnect } from '@perawallet/connect';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { Account } from 'src/app/interfaces/account.interface';
import { BlockchainService } from '../../base/blockchain-service.base';

@Injectable({
  providedIn: 'root',
})
export class PeraWalletService extends BlockchainService {
  private readonly peraWallet = new PeraWalletConnect({
    shouldShowSignTxnToast: false,
  });
  constructor() {
    super();
  }

  connectWallet(): Observable<Account> {
    return from(this.peraWallet.connect()).pipe(
      map((address) => {
        this.peraWallet.connector?.on('disconnect', this.handleDisconnectWalletClick);
        return { walletAddress: address[0] };
      }),
      catchError((error) => throwError(() => new Error(error)))
    );
  }
  handleDisconnectWalletClick() {
    this.peraWallet.disconnect();
  }
}
