import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ExAlphaComponent } from './ex-alpha/ex-alpha.component';
import { ExBetaComponent } from './ex-beta/ex-beta.component';
import { ExGammaComponent } from './ex-gamma/ex-gamma.component';
import { ExDeltaComponent } from './ex-delta/ex-delta.component';




@NgModule({
  declarations: [ExAlphaComponent, ExBetaComponent, ExGammaComponent, ExDeltaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class ExerciseModule { }
