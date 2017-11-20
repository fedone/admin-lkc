import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contabilita',
  template: `
	<div class="mdl-grid">
     <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
      <div>
       <line-chart></line-chart>
      </div>
    </div>
    <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
      <div>
       <pie-chart></pie-chart>
      </div>
    </div>
	</div>
  `,
  styleUrls: ['./contabilita.component.css']
})
export class ContabilitaComponent implements OnInit {

  title: 'Contabilità';

  constructor() { }
  ngOnInit() {
  }

}
