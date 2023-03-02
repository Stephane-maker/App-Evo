import { Component } from '@angular/core';
import { RequeteApiService } from '../../../core/requete/requete-api.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent {
  data!: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Hello')

    this.RAS.getPostprofilUser(localStorage.getItem("token")?.split("\"")[1]).subscribe(data => {
      console.log(data)
      this.data = data;
    }, err => {
      console.error(err)
    })
  }
  constructor(private  RAS : RequeteApiService){}
}
