import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ExAlphaComponent } from './ex-alpha/ex-alpha.component';
import { ExBetaComponent } from './ex-beta/ex-beta.component';
import { ExGammaComponent } from './ex-gamma/ex-gamma.component';
import { ExDeltaComponent } from './ex-delta/ex-delta.component';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';

const materialModules = [
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatBadgeModule,
  MatCardModule,
  MatCheckboxModule,
]



@NgModule({
  declarations: [ExAlphaComponent, ExBetaComponent, ExGammaComponent, ExDeltaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    materialModules,

  ]
})
export class ExerciseModule { }
