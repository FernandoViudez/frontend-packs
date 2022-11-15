import { environment } from '../../../environments/environment';

// Add Required Website Assets here
export const enum AssetId {
  connectWalletVideoBg = 'connectWalletVideoBg',
}

// Required Asset interface
export interface RequiredAsset {
  assetId: AssetId;
  type: 'image' | 'video';
  srcUrl: string;
}

// Add Required Assets by AssetId as objects that follos the above interface
export const _REQUIRED_ASSETS_: RequiredAsset[] = [
  {
    assetId: AssetId.connectWalletVideoBg,
    srcUrl: environment.srcUrl + '/videos/trantorian-gametrailer.mp4',
    type: 'video',
  },
];

export const getAssetsToPreload = () =>
  _REQUIRED_ASSETS_.map((asset) => ({ [asset.assetId]: false }));
