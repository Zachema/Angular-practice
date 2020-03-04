import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeAlphaComponent } from '../Three/three-alpha/three-alpha.component';
import { ThreeRoutingModule } from './three-routing.module';



@NgModule({
  declarations: [
    ThreeAlphaComponent],
  imports: [
    CommonModule,
    ThreeRoutingModule
  ],
  exports:[
    ThreeAlphaComponent
  ]
})
export class ThreeModule { }
