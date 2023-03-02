import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faComment, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DialogConversationUserComponent } from '../../dialog/dialog-conversation-user/dialog-conversation-user.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  id!: any;
  faComment = faComment;
  faUser = faUser;
  faUserGroup = faUserGroup;
  constructor(public dialog: MatDialog, private router: Router){}
  openDialogForConversation() {
    const dialogRef = this.dialog.open(DialogConversationUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  goToProfil(){
    this.id = localStorage.getItem("token")?.split("\"")[1];
    this.router.navigateByUrl(`evo/profil/${this.id}`)
  }
  goToHome(){
    this.router.navigateByUrl('evo/accueille');
  }
  goToFriend(){
    this.router.navigateByUrl('evo/friend');
  }
}
