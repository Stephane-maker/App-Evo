import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { EvoRouterModule } from './evo-router/evo-router.module';
import { PageAccueilleComponent } from './page-accueille/page-accueille.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { ConnexionUserComponent } from './connexion-user/connexion-user.component';
import { MatInputModules } from '../mat-input-app/mat-input.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserSettingsComponent } from './user/user-settings/user-settings.component';
import { UserFriendComponent } from './user/user-friend/user-friend.component';
import { UserPostComponent } from './user/user-post/user-post.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageAccueilleComponent,
    PageInscriptionComponent,
    NotFoundComponent,
    PageProfilComponent,
    ConnexionUserComponent,
    NavBarComponent,
    UserSettingsComponent,
    UserFriendComponent,
    UserPostComponent,
  ],
  imports: [
    CommonModule,
    MatInputModules,
    ReactiveFormsModule
  ],

  exports: [
    PageAccueilleComponent,
    PageInscriptionComponent,
    NotFoundComponent,
    PageProfilComponent,
    ConnexionUserComponent,
    NavBarComponent,
    UserSettingsComponent,
    UserFriendComponent,
    UserPostComponent,
    EvoRouterModule
  ],
  providers: [ ]
})
export class EvoModuleModule {
}
