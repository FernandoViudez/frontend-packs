import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';
import { AssetId, RequiredAsset, _REQUIRED_ASSETS_ } from './assets-to-preload';
import { initAssetsState, setAssetsState } from './preload-asset.state';

@Injectable({
  providedIn: 'root',
})
export class PreloadService {
  private r2!: Renderer2;
  private readonly requiredAssets = [..._REQUIRED_ASSETS_];

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    initAssetsState();
  }

  preloadAllResources(r2: Renderer2): void {
    this.r2 = r2;
    this.requiredAssets.forEach((asset) => this.preloadSingleAsset(asset));
  }

  private preloadSingleAsset(asset: RequiredAsset): void {
    const assetInstance = this.createAsset(asset);
    if (asset.type === 'image') {
      this.notifyWhenImgIsLoaded(<HTMLImageElement>assetInstance, asset.assetId);
    } else {
      this.notifyWhenVideoIsLoaded(<HTMLVideoElement>assetInstance, asset.assetId);
    }
    this.document.body.appendChild(assetInstance);
  }

  private createAsset({ srcUrl: src, type }: RequiredAsset): HTMLImageElement | HTMLVideoElement {
    const instance = type === 'image' ? new Image(0, 0) : this.r2.createElement('video');
    instance.src = src;
    if (type === 'video') this.configVideoElement(instance as HTMLVideoElement);
    return instance;
  }

  private configVideoElement(instance: HTMLVideoElement): void {
    instance.autoplay = true;
    instance.muted = true;
    instance.preload = 'auto';
  }

  private notifyWhenImgIsLoaded(asset: HTMLImageElement, id: AssetId): void {
    asset.addEventListener('load', () => {
      this.document.body.removeChild(asset);
      setAssetsState(id);
    });
  }

  private notifyWhenVideoIsLoaded(asset: HTMLVideoElement, id: AssetId): void {
    asset.addEventListener('canplaythrough', () => {
      this.document.body.removeChild(asset);
      setAssetsState(id);
    });
  }
}
