import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RequeteApiService } from '../../core/requete/requete-api.service';
import { HttpClient } from '@angular/common/http';
import { faTrash, faComment } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddPostComponent } from '../../dialog/dialog-add-post/dialog-add-post.component';

@Component({
  selector: 'app-page-accueille',
  templateUrl: './page-accueille.component.html',
  styleUrls: ['./page-accueille.component.scss']
})


export class PageAccueilleComponent {
  constructor(private router: Router, private RAS: RequeteApiService, private http: HttpClient, public dialog: MatDialog){}
  faTrash = faTrash;
  faComment = faComment;
  data:any = [{
    id : 1,
    name: 'Stephane',
    last_name: 'Thiebaut',
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },{
    id : 1,
    name: 'Ellyn',
    last_name: 'Rouden',
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Yun_Zi_-_Baby_Giant_Panda_-_IMG_1729_2_%284306258908%29.jpg",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },{
    id : 1,
    name: 'Ambre',
    last_name: 'Spieza',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX5kDo8Q6fQ4TWEffDdTzFyL5u5QpQuIfiiQ&usqp=CAU",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  //   this.RAS.getAllPost().subscribe(data => {
  //   this.data = data;
  //   console.log(data);
  //     for (let i = 0; i < this.data.length; i++) {
  //       const element = this.data[i];
  //       console.log(element);
  //       this.id = element.id;
  //     }
  // })

}
  openDialog() {
    const dialogRef = this.dialog.open(DialogAddPostComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
