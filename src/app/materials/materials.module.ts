import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule} from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';

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
  MatSidenavModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports:[
    materialModules
  ]
})
export class MaterialsModule { }
