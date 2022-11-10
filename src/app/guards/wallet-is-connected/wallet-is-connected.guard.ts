import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { _APP_ROUTES_ } from '../../utils/app-route-names.utils';
import { LS_KEY, WalletState } from './wallet-states';

@Injectable({
  providedIn: 'root',
})
export class WalletIsConnectedGuard implements CanActivate, CanLoad {
  constructor(private readonly router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const walletConnected = localStorage.getItem(LS_KEY);
    if (walletConnected && walletConnected === WalletState.connected) return true;
    return this.router.createUrlTree([_APP_ROUTES_.connectWallet]);
  }
}
