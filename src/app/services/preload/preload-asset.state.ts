import { Subject } from 'rxjs';
import { AssetId, getAssetsToPreload } from './assets-to-preload';

let _assetsState: any;

export const initAssetsState = () => {
  _assetsState = getAssetsToPreload();
};

const assetsPreloadFinished$ = new Subject<boolean>();

export const assetsPreloadListener = () => {
  return assetsPreloadFinished$.asObservable();
};

export const setAssetsState = (key: AssetId) => {
  _assetsState = {
    ..._assetsState,
    [key]: !_assetsState[key],
  };
  checkAssetsPreloadStatus();
};

export const checkAssetsPreloadStatus = () => {
  let preloadFinish = true;
  for (const key in _assetsState) preloadFinish = preloadFinish && _assetsState[key];
  if (preloadFinish) {
    assetsPreloadFinished$.next(true);
    assetsPreloadFinished$.complete();
  }
};
