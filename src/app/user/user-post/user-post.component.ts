import { Component } from '@angular/core';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent {
  data:any = [{
    id : 1,
    name: 'Ellyn',
    last_name: 'Rouden',
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Yun_Zi_-_Baby_Giant_Panda_-_IMG_1729_2_%284306258908%29.jpg",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },{
    id : 1,
    name: 'Ellyn',
    last_name: 'Rouden',
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Yun_Zi_-_Baby_Giant_Panda_-_IMG_1729_2_%284306258908%29.jpg",
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }];
}
