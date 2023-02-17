import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from '../component/page-inscription/page-inscription.component';
import { ConnexionUserComponent } from '../component/connexion-user/connexion-user.component';

import { NotFoundComponent } from '../component/not-found/not-found.component';
import { RedirectingConnexionComponent } from '../redirecting-connexion/redirecting-connexion.component';
import { PageAccueilleComponent } from '../component/page-accueille/page-accueille.component';


const routes: Routes = [
  {path: '', component: RedirectingConnexionComponent},

  { path: 'evo',loadChildren: () => import("../component/evo-router/evo-router.module").then(m => m.EvoRouterModule)},
  { path: 'sign-up', component: PageInscriptionComponent },
  { path: 'sign-in', component: ConnexionUserComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
