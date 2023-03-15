import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asiakas',
  templateUrl: './asiakas.component.html',
  styleUrls: ['./asiakas.component.css']
})
export class AsiakasComponent {


  @Input() receivedKitchenMessage: string | undefined;
  @Output() messageToEmitAsiakas = new EventEmitter<string>();

  // MSG FROM TABLE (WHERE CUSTOMER SITS)
  @Output() messageToEmitFromTable = new EventEmitter<string>();
  messageFromTable: string | undefined;

  messageToSendC: string = "Asiakas tervehtii keittiötä!";

  sendMessageToKitchen(message: string, messagefromtable: string) {
    this.messageToEmitAsiakas.emit(message)
    this.messageToEmitFromTable.emit(messagefromtable)
  }

}
