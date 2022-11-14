import { Injectable } from '@angular/core';
import { PeraWalletConnect } from '@perawallet/connect';
import { from, map, Observable } from 'rxjs';
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
      })
    );
  }

  handleDisconnectWalletClick() {
    this.peraWallet.disconnect();
  }
}
