import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';
import { MatInputModules } from './mat-input-app/mat-input.module';
import { PageAccueilleComponent } from './page-accueille/page-accueille.component';
import { InterptorTokenService } from './interceptorToken/interptor-token.service';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    PageInscriptionComponent,
    ConnexionUserComponent,
    PageAccueilleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModules
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterptorTokenService, multi: true}],

  bootstrap: [AppComponent]
})
export class AppModule { }
