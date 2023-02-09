import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequeteApiService } from '../requete/requete-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-accueille',
  templateUrl: './page-accueille.component.html',
  styleUrls: ['./page-accueille.component.scss']
})
export class PageAccueilleComponent {
  constructor(private router: Router, private RAS: RequeteApiService, private http: HttpClient){}
  data:any = [];
  id!: number;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.RAS.getAllPost().subscribe(data => {
    this.data = data;
    console.log(data);
      for (let i = 0; i < this.data.length; i++) {
        const element = this.data[i];
        console.log(element.id);
        this.id = element.id;
      }
  })
}

}
