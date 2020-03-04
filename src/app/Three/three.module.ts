import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeAlphaComponent } from '../Three/three-alpha/three-alpha.component';



@NgModule({
  declarations: [
    ThreeAlphaComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ThreeAlphaComponent
  ]
})
export class ThreeModule { }
