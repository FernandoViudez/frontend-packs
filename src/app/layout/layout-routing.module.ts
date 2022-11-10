import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouteNames, _APP_ROUTES_ } from '../utils/app-route-names.utils';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: AppRouteNames.empty,
    component: LayoutComponent,
    children: [
      {
        path: AppRouteNames.nftReveal,
        loadComponent: () =>
          import('../pages/nft-reveal/nft-reveal.component').then((c) => c.NftRevealComponent),
      },
      {
        path: AppRouteNames.empty,
        pathMatch: 'full',
        redirectTo: _APP_ROUTES_.nftReveal,
      },
      {
        path: AppRouteNames.any,
        pathMatch: 'full',
        redirectTo: _APP_ROUTES_.nftReveal,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
