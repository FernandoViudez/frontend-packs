import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft-reveal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nft-reveal.component.html',
  styleUrls: ['./nft-reveal.component.scss'],
})
export class NftRevealComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
