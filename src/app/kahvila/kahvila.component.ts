import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-kahvila',
  templateUrl: './kahvila.component.html',
  styleUrls: ['./kahvila.component.css']
})
export class KahvilaComponent {

  @Input() receivedParentMessageKPL: string | undefined;
  @Output() outputEvent4 = new EventEmitter<string>();
  messageToSendKappalemaara: string | undefined;


  kahviaMyyty(lukema: string){
    this.outputEvent4.emit(lukema);
  }


kahviaTarjoiltu() {
};

 
  

  
}
