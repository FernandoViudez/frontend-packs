import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadedDirective } from '../directive/img-preload.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './pages/loading-screen/loading-screen.component';

@NgModule({
  declarations: [AppComponent, LoadingScreenComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, LoadedDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
