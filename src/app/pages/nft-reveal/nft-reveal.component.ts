import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PackService } from '../../services/pack.service';
import { WalletHandlerService } from '../../services/wallet-handler.service';

@Component({
  selector: 'app-nft-reveal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nft-reveal.component.html',
  styleUrls: ['./nft-reveal.component.scss'],
})
export class NftRevealComponent implements OnInit {
  constructor(
    private readonly walletHandlerService: WalletHandlerService,
    private readonly packService: PackService
  ) {}

  ngOnInit(): void {
    // TODO: Fix when reloading page, persist wallet-address prop
    this.packService.getHoldingPacks(this.walletHandlerService.Account.walletAddress).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err),
    });
  }
}
