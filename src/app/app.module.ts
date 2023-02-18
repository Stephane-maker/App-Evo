import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatInputModules } from './mat-input-app/mat-input.module';

import { InterptorTokenService } from './core/interceptorToken/interptor-token.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogAddPostComponent } from './dialog/dialog-add-post/dialog-add-post.component';
import { RedirectingConnexionComponent } from './redirecting-connexion/redirecting-connexion.component';
import { DialogConversationUserComponent } from './dialog/dialog-conversation-user/dialog-conversation-user.component';

import { EvoModuleModule } from './component/evo-module.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';



@NgModule({

  declarations: [
    AppComponent,
    DialogAddPostComponent,
    RedirectingConnexionComponent,
    DialogConversationUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModules,
    FontAwesomeModule,
    EvoModuleModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterptorTokenService, multi: true}, { provide:LocationStrategy, useClass: HashLocationStrategy}],

  bootstrap: [AppComponent]
})
export class AppModule { }
