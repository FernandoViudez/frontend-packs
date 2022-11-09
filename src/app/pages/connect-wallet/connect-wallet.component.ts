import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MyAlgoService } from '../../services/my-algo.service';

@Component({
  selector: 'app-connect-wallet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.scss'],
})
export class ConnectWalletComponent implements OnInit {
  constructor(private readonly myAlgo: MyAlgoService) {}

  ngOnInit(): void {}

  handleWalletConnection(wallet: 'my-algo' | 'pera-wallet'): void {
    if (wallet === 'my-algo') {
      this.connectWalletWithMyAlgo();
    } else {
    }
  }

  private connectWalletWithMyAlgo(): void {
    this.myAlgo.connectWallet().subscribe((response) => {
      console.log(response);
    });
  }
}
