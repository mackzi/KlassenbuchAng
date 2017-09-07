import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KlassenComponent } from './klassen/klassen.component';
import { SchuelerComponent } from './schueler/schueler.component';
import { LehrerComponent } from './lehrer/lehrer.component';
import { LoginComponent } from './login/login.component';
import { NotizenComponent } from './notizen/notizen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KlassenComponent,
    SchuelerComponent,
    LehrerComponent,
    LoginComponent,
    NotizenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
