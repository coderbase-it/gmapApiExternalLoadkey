import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { PageLazyComponent } from './page-lazy/page-lazy.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    PageLazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    AgmCoreModule
  ]
})
export class LazyModule { }
