import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageInscriptionComponent } from './component/page-inscription/page-inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConnexionUserComponent } from './component/connexion-user/connexion-user.component';
import { MatInputModules } from './mat-input-app/mat-input.module';

import { InterptorTokenService } from './core/interceptorToken/interptor-token.service';
import { NotFoundComponent } from './component/not-found/not-found.component';


import { PageAccueilleComponent } from './component/page-accueille/page-accueille.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogAddPostComponent } from './dialog/dialog-add-post/dialog-add-post.component';
import { RedirectingConnexionComponent } from './redirecting-connexion/redirecting-connexion.component';
import { DialogConversationUserComponent } from './dialog/dialog-conversation-user/dialog-conversation-user.component';
import { PageProfilComponent } from './component/page-profil/page-profil.component';
import { UserPostComponent } from './user/user-post/user-post.component';
import { UserFriendComponent } from './user/user-friend/user-friend.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';







@NgModule({
  declarations: [
    AppComponent,
    PageInscriptionComponent,
    ConnexionUserComponent,
    PageAccueilleComponent,
    NotFoundComponent,
    NavBarComponent,
    DialogAddPostComponent,
    RedirectingConnexionComponent,
    DialogConversationUserComponent,
    PageProfilComponent,
    UserPostComponent,
    UserFriendComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModules,
    FontAwesomeModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterptorTokenService, multi: true}],

  bootstrap: [AppComponent]
})
export class AppModule { }
