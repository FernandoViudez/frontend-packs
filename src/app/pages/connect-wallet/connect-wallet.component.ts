import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeraWalletConnect } from '@perawallet/connect';

@Component({
  selector: 'app-connect-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.scss'],
})
export class ConnectWalletComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'perawallet';
  peraWallet = new PeraWalletConnect({
    shouldShowSignTxnToast: false,
  });
  connectButton: any = document.querySelector('#titile');
  accountAddress: string = '';

  handleConnectWalletClick() {
    this.peraWallet
      .connect()
      .then((newAccounts) => {
        this.peraWallet.connector?.on('disconnect', this.handleDisconnectWalletClick);

        console.log(newAccounts[0]);
      })
      .catch((error) => {
        if (error?.data?.type !== 'CONNECT_MODAL_CLOSED') {
        }
      });
  }

  handleDisconnectWalletClick() {
    this.peraWallet.disconnect();
  }
}
