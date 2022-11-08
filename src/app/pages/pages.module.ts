import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PagesRoutingModule, NgbAccordionModule],
})
export class PagesModule {}
