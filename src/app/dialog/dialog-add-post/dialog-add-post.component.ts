import { Component } from '@angular/core';
import { faLink, faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-add-post',
  templateUrl: './dialog-add-post.component.html',
  styleUrls: ['./dialog-add-post.component.scss']
})
export class DialogAddPostComponent {
  faLink = faLink;
  faImage = faImage;
}
