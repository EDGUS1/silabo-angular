import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSilabosComponent } from './components/home-silabos/home-silabos.component';
import { LoginComponent } from './components/login/login.component';
import { SilaboComponent } from './components/silabo/silabo.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'silabos',
    component: HomeSilabosComponent,
  },
  {
    path: 'silabo',
    component: SilaboComponent,
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
