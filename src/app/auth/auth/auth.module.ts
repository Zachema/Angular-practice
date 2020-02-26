import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

import { MaterialsModule } from '../../materials/materials.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialsModule
  ]
})
export class AuthModule { }
