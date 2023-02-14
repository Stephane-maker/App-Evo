import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirecting-connexion',
  templateUrl: './redirecting-connexion.component.html',
  styleUrls: ['./redirecting-connexion.component.scss']
})
export class RedirectingConnexionComponent {
  constructor(private router:Router){}
  goTosignIn(){
    this.router.navigateByUrl("sign-in");
  }
  goToSignUp(){
    this.router.navigateByUrl("sign-up");
  }
  goToAccueil(){
    this.router.navigateByUrl("accueille");
  }
}
