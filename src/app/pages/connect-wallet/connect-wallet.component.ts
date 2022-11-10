import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntegratedWallet } from 'src/app/services/integrated-wallets/integrated-wallets';
import { INTEGRATED_WALLETS } from '../../services/integrated-wallets/integrated-wallets';
import { WalletHandlerService } from '../../services/wallet-handler.service';
import { _APP_ROUTES_ } from '../../utils/app-route-names.utils';

@Component({
  selector: 'app-connect-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.scss'],
})
export class ConnectWalletComponent implements OnInit {
  integratedWallets = INTEGRATED_WALLETS;

  constructor(
    private readonly walletHandlerService: WalletHandlerService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  handleWalletConnection(wallet: IntegratedWallet): void {
    this.walletHandlerService.connectWalletByIntegrationSelected(wallet).subscribe((response) => {
      this.router.navigateByUrl(_APP_ROUTES_.nftReveal);
    });
  }
}
