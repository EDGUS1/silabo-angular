import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeSilabosComponent } from './components/home-silabos/home-silabos.component';
import { CardSilaboComponent } from './components/card-silabo/card-silabo.component';
import { SilaboComponent } from './components/silabo/silabo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardSilabosListComponent } from './components/card-silabos-list/card-silabos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeSilabosComponent,
    CardSilaboComponent,
    SilaboComponent,
    CardSilabosListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
