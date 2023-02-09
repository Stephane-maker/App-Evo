import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscriptionComponent } from '../page-inscription/page-inscription.component';
import { ConnexionUserComponent } from '../connexion-user/connexion-user.component';
import { PageAccueilleComponent } from '../page-accueille/page-accueille.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', component: PageInscriptionComponent },
  { path: 'sign-in', component: ConnexionUserComponent },
  { path: 'accueille' , component: PageAccueilleComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
