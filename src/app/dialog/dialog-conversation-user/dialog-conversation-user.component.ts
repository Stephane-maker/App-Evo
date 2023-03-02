import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { RequeteApiService } from '../../core/requete/requete-api.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-dialog-conversation-user',
  templateUrl: './dialog-conversation-user.component.html',
  styleUrls: ['./dialog-conversation-user.component.scss']
})
export class DialogConversationUserComponent {
  element!: any;
  dataSource! : any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 // dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.RAS.getAllConversationUser().subscribe(data => {
      console.log(data)
      this.element = data;
      this.dataSource = this.element;



    },err => {
      console.log(err)
    })
  }

  constructor(private router: Router, private  RAS: RequeteApiService){}

  goToConversation(){
    this.router.navigateByUrl("evo/all-conversation");
  }
  goToConversationById(id: number){
    this.router.navigateByUrl(`evo/conversation/${id}`);
  }
}
