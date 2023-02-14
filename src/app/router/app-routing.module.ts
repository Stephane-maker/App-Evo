import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from '../component/page-inscription/page-inscription.component';
import { ConnexionUserComponent } from '../component/connexion-user/connexion-user.component';
import { PageAccueilleComponent } from '../component/page-accueille/page-accueille.component';
import { NotFoundComponent } from '../component/not-found/not-found.component';
import { RedirectingConnexionComponent } from '../redirecting-connexion/redirecting-connexion.component';
import { PageProfilComponent } from '../component/page-profil/page-profil.component';
import { UserFriendComponent } from '../user/user-friend/user-friend.component';

const routes: Routes = [
  {path: '', component: RedirectingConnexionComponent},
  { path: 'sign-up', component: PageInscriptionComponent },
  { path: 'sign-in', component: ConnexionUserComponent },
  { path: 'accueille' , component: PageAccueilleComponent },
  { path: 'profil' , component: PageProfilComponent },
  { path: 'friend' , component: UserFriendComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
