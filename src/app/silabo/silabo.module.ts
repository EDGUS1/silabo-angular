import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SilaboRoutingModule } from './silabo-routing.module';
import { CardSilaboComponent } from './components/card-silabo/card-silabo.component';
import { CardSilabosListComponent } from './components/card-silabos-list/card-silabos-list.component';
import { FormSilaboComponent } from './components/form-silabo/form-silabo.component';
import { HeaderSilaboComponent } from './components/header-silabo/header-silabo.component';
import { HomeSilabosComponent } from './pages/home-silabos/home-silabos.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { SilaboComponent } from './pages/silabo/silabo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReferenceComponent } from './components/reference/reference.component';

@NgModule({
  declarations: [
    HomeSilabosComponent,
    CardSilaboComponent,
    SilaboComponent,
    CardSilabosListComponent,
    FormSilaboComponent,
    HeaderSilaboComponent,
    NewCourseComponent,
    TruncatePipe,
    SearchPipe,
    ReferenceComponent,
  ],
  imports: [
    CommonModule,
    SilaboRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
})
export class SilaboModule {}
