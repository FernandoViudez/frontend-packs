import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseComponent } from '../../base/component.base';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
})
export class LoadingScreenComponent extends BaseComponent {
  bgImgLoaded = false;
  loadingPage = environment.srcUrl + '/img/landing-page/trantorian-wallpaper-logo.png';

  constructor() {
    super();
  }
}
