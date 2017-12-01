import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-static-map-generator',
  template: `<div [@fade] *ngFor="let item of items | async" class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-cell--3-col-desktop">
  		<div class="mdl-card__title mdl-card--expand">
    		<img src="https://maps.googleapis.com/maps/api/staticmap?center={{ (item.lat) }},{{ (item.long) }}&zoom=18&size=500x400&maptype=roadmap&key=AIzaSyBgIfTcWVPgWam3gxncC8BTjjrrbr2nwCA" alt="">
 		</div>
  	<div class="mdl-card__supporting-text mdl-color-text--grey-600">
    	<h4>Evento</h4>
  	</div>
  	<ul class="list-item mdl-list">
    	<li class="mdl-list__item">
      	<span class="mdl-list__item-primary-content">
        	Luogo: {{ (item.location) }}
      	</span>
    	</li>
    	<li class="mdl-list__item">
      	<span class="mdl-list__item-primary-content">
        	Data: {{ (item.date) }}
      	</span>
    	</li>
      <li class="mdl-list__item">
      <a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised" href="{{ (item.indicationUrl) }}" target="blank">
        Indicazioni
      </a>
  	</ul>
</div>
`,
  styleUrls: ['./static-map-generator.component.css'],
  animations: [ trigger('fade', [
      transition(':enter', [style({opacity: 0}), animate('.3s ease')])
    ])
  ]
})
export class StaticMapGeneratorComponent implements OnInit {
  
   items: FirebaseListObservable<any>;
   sizeSubject: Subject<any>;


  constructor(db: AngularFireDatabase) { 
  	this.sizeSubject = new Subject();
  	this.items = db.list('/maps', {
  		query: {
  			limitToLast: 10
  		}
  	});

    
  }

  ngOnInit() {
  }
}