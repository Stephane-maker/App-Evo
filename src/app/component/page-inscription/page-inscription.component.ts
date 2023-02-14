import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequeteApiService } from '../../core/requete/requete-api.service';


@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent {
  connexionForm!: FormGroup;
  messageError!: string;

  ngOnInit(): void {
    this.connexionForm = this.fb.group({
        email: [null, Validators.required],
        password: [null, Validators.required],
        confirmPassword: [null, Validators.required],
        userName: [null, Validators.required],
        lastName: [null, Validators.required]
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  constructor(private fb: FormBuilder, private RAS : RequeteApiService) { }
  test(){
    if (this.connexionForm.valid && this.connexionForm.value.password == this.connexionForm.value.confirmPassword ) {
      console.log("hello world!");
      console.log(this.connexionForm.value.email);
      console.log(this.connexionForm.valid);
      this.RAS.InscriptionUser(this.connexionForm.value.email, this.connexionForm.value.password, this.connexionForm.value.confirmPassword, this.connexionForm.value.userName, this.connexionForm.value.lastName).subscribe(data => {
        console.log(data);
      }, (err) => { console.log(err); });
    }
  }
}
