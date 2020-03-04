import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ExAlphaComponent } from './ex-alpha/ex-alpha.component';
import { ExBetaComponent } from './ex-beta/ex-beta.component';
import { ExGammaComponent } from './ex-gamma/ex-gamma.component';
import { ExDeltaComponent } from './ex-delta/ex-delta.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from '../materials/materials.module';
import { ExerciseComponent } from './exercise.component';
import { SharedModule } from '../shared/shared.module';
import { ThreeModule } from '../Three/three.module';



@NgModule({
  declarations: [
    ExAlphaComponent,
    ExBetaComponent,
    ExGammaComponent,
    ExDeltaComponent,
    ExerciseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialsModule,
  ]
})
export class ExerciseModule { }
