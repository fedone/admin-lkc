import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { StaticMapGeneratorComponent } from './static-map-generator';


@Component({
  selector: 'app-eventi',
  template: `
      
				  <app-static-map-generator class="mdl-grid"></app-static-map-generator>
  
  `,
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
  }

}
