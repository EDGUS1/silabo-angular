import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomeSilabosComponent } from './pages/home-silabos/home-silabos.component';
import { SilaboComponent } from './pages/silabo/silabo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeSilabosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'config',
    component: SilaboComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SilaboRoutingModule {}
