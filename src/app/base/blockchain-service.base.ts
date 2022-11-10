import { Directive } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account.interface';

@Directive()
export abstract class BlockchainService {
  abstract connectWallet(): Promise<Account> | Account | Observable<Account>;
}
