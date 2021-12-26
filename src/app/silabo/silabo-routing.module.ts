import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomeSilabosComponent } from './components/home-silabos/home-silabos.component';
import { SilaboComponent } from './components/silabo/silabo.component';

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