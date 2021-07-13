import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLazyComponent } from './page-lazy/page-lazy.component';

const routes: Routes = [
  { path:'', component: PageLazyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
