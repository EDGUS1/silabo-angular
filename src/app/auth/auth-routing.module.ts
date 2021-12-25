import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoauthGuard } from '../guards/noauth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [NoauthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
