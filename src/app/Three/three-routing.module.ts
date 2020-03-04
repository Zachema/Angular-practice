import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeAlphaComponent } from './three-alpha/three-alpha.component';
import { NgModel } from '@angular/forms';
import { ThreeModule } from './three.module';

const routes: Routes = [
  { path: '', component: ThreeAlphaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeRoutingModule {

}
