import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteNames, _APP_ROUTES_ } from './utils/app-route-names.utils';

const routes: Routes = [
  {
    path: AppRouteNames.connectWallet,
    loadComponent: () =>
      import('./pages/connect-wallet/connect-wallet.component').then(
        (c) => c.ConnectWalletComponent
      ),
  },
  {
    path: AppRouteNames.nftReveal,
    loadComponent: () =>
      import('./pages/nft-reveal/nft-reveal.component').then((c) => c.NftRevealComponent),
  },
  {
    path: AppRouteNames.empty,
    pathMatch: 'full',
    redirectTo: _APP_ROUTES_.connectWallet,
  },
  {
    path: AppRouteNames.any,
    pathMatch: 'full',
    redirectTo: _APP_ROUTES_.connectWallet,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
