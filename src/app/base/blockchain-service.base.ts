import { Directive } from '@angular/core';
import { Observable } from 'rxjs';

@Directive()
export abstract class BlockchainService<T> {
  abstract connectWallet(): Promise<T> | T | Observable<T>;
}
