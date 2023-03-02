
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAccueilleComponent } from '../page-accueille/page-accueille.component';
import { PageProfilComponent } from '../page-profil/page-profil.component';
import { UserFriendComponent } from '../user/user-friend/user-friend.component';

import { PageInscriptionComponent } from '../page-inscription/page-inscription.component';
import { ConnexionUserComponent } from '../connexion-user/connexion-user.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ShowAllConversationComponent } from '../show-all-conversation/show-all-conversation.component';
import { FriendConversationComponent } from '../friend-conversation/friend-conversation.component';


const routes: Routes = [

  { path: 'sign-up', component: PageInscriptionComponent },
  { path: 'sign-in', component: ConnexionUserComponent },
  { path: 'all-conversation', component: ShowAllConversationComponent },
  { path: 'conversation/:id', component: FriendConversationComponent },
  { path: 'accueille', component: PageAccueilleComponent },
  { path: 'profil/:id' , component: PageProfilComponent },
  { path: 'friend' , component: UserFriendComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class evoRouterRoutingModule { }
