import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardGeneratorComponent } from './card-generator';


@Component({
  selector: 'app-console',
  template: `        
		<div class="mdl-grid">
        	<app-card-generator class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid"></app-card-generator>
        </div>`,
  styleUrls: ['./console.component.css']
})

export class ConsoleComponent implements OnInit {

  title: 'console';

  constructor() { 
  }



  ngOnInit() {
  }


}
