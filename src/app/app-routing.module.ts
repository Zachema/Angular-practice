import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExAlphaComponent } from './exercise/ex-alpha/ex-alpha.component';
import { AuthComponent } from './auth/auth/auth.component';
import { ExBetaComponent } from './exercise/ex-beta/ex-beta.component';
import { ExGammaComponent } from './exercise/ex-gamma/ex-gamma.component';
import { ExDeltaComponent } from './exercise/ex-delta/ex-delta.component';
import { AuthGuard } from './guard/auth.guard';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'main', component: ExerciseComponent, children: [
      { path: 'alpha', component: ExAlphaComponent, canActivate: [AuthGuard], },
      { path: 'beta', component: ExBetaComponent },
      { path: 'gamma', component: ExGammaComponent },
      { path: 'delta', component: ExDeltaComponent },
      { path: '**', redirectTo: '/main/alpha', pathMatch: 'full' },
      // {path:'epsilon',component:},
    ]
  },
  { path: '**', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
