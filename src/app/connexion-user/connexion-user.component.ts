import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequeteApiService } from '../requete/requete-api.service';
import { Router } from '@angular/router';
import { InterptorTokenService } from '../interceptorToken/interptor-token.service';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-connexion-user',
  templateUrl: './connexion-user.component.html',
  styleUrls: ['./connexion-user.component.scss']
})
export class ConnexionUserComponent {

  connexionForm!: FormGroup;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.connexionForm = this.fb.group({
      email: [null, Validators.required],
      passsword : [null, Validators.required]
    });
  }

  constructor(private fb: FormBuilder, private RAS : RequeteApiService, private router: Router,){}

  connect() {
    this.RAS.ConnexionUser(this.connexionForm.value.email, this.connexionForm.value.passsword).subscribe(data => {
      console.log(data.token);
      this.router.navigateByUrl('accueille');
      localStorage.setItem('token', JSON.stringify(data.token));
    }, (err) => { console.log(err); });
  }

}

