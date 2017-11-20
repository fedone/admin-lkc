import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardGeneratorComponent } from './card-generator';


@Component({
  selector: 'app-console',
  template: `        
		<div class="mdl-grid">
        	<app-card-generator class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid"></app-card-generator>
          <dialog class="mdl-dialog">
              <h4 class="mdl-dialog__title">Allow data collection?</h4>
              <div class="mdl-dialog__content">
                <p>
                  Allowing us to collect data will let us get you the information you want faster.
                </p>
              </div>
              <div class="mdl-dialog__actions">
                <button type="button" class="mdl-button">Agree</button>
                <button type="button" class="mdl-button close">Disagree</button>
              </div>
            </dialog>
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
