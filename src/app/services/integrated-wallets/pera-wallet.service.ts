import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/interfaces/account.interface';
import { BlockchainService } from '../../base/blockchain-service.base';
import { PeraWalletConnect } from '@perawallet/connect'

@Injectable({
  providedIn: 'root',
})
export class PeraWalletService extends BlockchainService {
  constructor() {
    super();
  }

  connectWallet(): Observable<Account> {
    throw new Error('Method not implemented.');
  }
}
