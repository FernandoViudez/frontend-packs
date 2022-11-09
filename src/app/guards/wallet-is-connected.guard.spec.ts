import { TestBed } from '@angular/core/testing';

import { WalletIsConnectedGuard } from './wallet-is-connected.guard';

describe('WalletIsConnectedGuard', () => {
  let guard: WalletIsConnectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WalletIsConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
