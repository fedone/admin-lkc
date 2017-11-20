import { Component, OnInit } from '@angular/core';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { MessagingService } from "../messaging.service";

@Component({
  selector: 'app-team-builder',
  template: `{{ message | async | json }}`,
  styleUrls: ['./team-builder.component.css']
})
export class TeamBuilderComponent implements OnInit {

	message;

  constructor(private msgService: MessagingService) { }

  ngOnInit() {

  	this.msgService.getPermission()
  	this.msgService.receiveMessage()
  	this.message = this.msgService.currentMessage
  }

}
