import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExAlphaComponent } from './exercise/ex-alpha/ex-alpha.component';

const routes: Routes = [
  { path: '', component: ExAlphaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
