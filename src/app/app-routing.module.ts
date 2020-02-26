import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExAlphaComponent } from './exercise/ex-alpha/ex-alpha.component';
import { AuthComponent } from './auth/auth/auth.component';
import { ExBetaComponent } from './exercise/ex-beta/ex-beta.component';
import { ExGammaComponent } from './exercise/ex-gamma/ex-gamma.component';
import { ExDeltaComponent } from './exercise/ex-delta/ex-delta.component';
import { AuthService } from './services/auth.service';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent, canActivate: [AuthService] },
  {
    path: 'main', component: ExerciseComponent, children: [
      { path: 'alpha', component: ExAlphaComponent },
      { path: 'beta', component: ExBetaComponent },
      { path: 'gamma', component: ExGammaComponent },
      { path: 'delta', component: ExDeltaComponent }
      // {path:'epsilon',component:},
    ]
  },
  { path: '**', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
