import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSilabosComponent } from './components/home-silabos/home-silabos.component';
import { LoginComponent } from './components/login/login.component';
import { SilaboComponent } from './components/silabo/silabo.component';
import { AuthGuard } from './guards/auth.guard';
import { NoauthGuard } from './guards/noauth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [NoauthGuard],
  },
  {
    path: 'silabos',
    component: HomeSilabosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'silabo',
    component: SilaboComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
