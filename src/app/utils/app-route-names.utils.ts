export const enum AppRouteNames {
  nftReveal = 'nft-reveal',
  connectWallet = 'connect-wallet',
  empty = '',
  any = '**',
}

export const _APP_ROUTES_ = Object.freeze({
  nftReveal: '/' + AppRouteNames.nftReveal,
  connectWallet: '/' + AppRouteNames.connectWallet,
  empty: '/' + AppRouteNames.empty,
});
