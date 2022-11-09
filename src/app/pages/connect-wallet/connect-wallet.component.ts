import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}
