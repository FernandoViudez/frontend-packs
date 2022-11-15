import { Component, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from './base/component.base';
import { assetsPreloadListener } from './services/preload/preload-asset.state';
import { PreloadService } from './services/preload/preload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent implements OnInit {
  assetsPreloadCompleted: boolean = false;

  constructor(private readonly preloadService: PreloadService, private readonly r2: Renderer2) {
    super();
  }

  ngOnInit(): void {
    this.preloadResourcesListener();
  }

  private preloadResourcesListener(): void {
    this.preloadService.preloadAllResources(this.r2);
    this.unsubscribeOnDestroy(
      assetsPreloadListener().subscribe((status) => (this.assetsPreloadCompleted = status))
    );
  }
}
