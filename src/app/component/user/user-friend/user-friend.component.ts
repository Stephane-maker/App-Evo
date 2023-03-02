import { Component } from '@angular/core';
import { RequeteApiService } from '../../../core/requete/requete-api.service';

@Component({
  selector: 'app-user-friend',
  templateUrl: './user-friend.component.html',
  styleUrls: ['./user-friend.component.scss']
})
export class UserFriendComponent {
  data:any;
  verifHref!: boolean;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (document.location.href == 'http://localhost:4200/#/evo/friend') {
      this.verifHref = true;
    }
    this.RAS.getFriendUser(localStorage.getItem("token")?.split("\"")[1]).subscribe(data => {
      this.data = data;
      console.log(data)
    }, err => {
      console.log(err)
    })
  }
  constructor(private RAS: RequeteApiService){}
}
