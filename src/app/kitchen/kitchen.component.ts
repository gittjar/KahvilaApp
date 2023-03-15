import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {

  receivedAsiakasMessage: string | undefined;
  receivedTableInformation: string | undefined;
  messageToSendP: string = '';

  sendToAsiakas(message: string) {
    this.messageToSendP = message;
  }

  getMessage(message: string) {
    this.receivedAsiakasMessage = message;
  }
  getTableInformation ( messagefromtable: string){
    this.receivedTableInformation = messagefromtable;
  }

}
