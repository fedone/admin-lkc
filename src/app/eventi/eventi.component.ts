import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-eventi',
  template: `<div class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
				<div *ngFor="let item of items | async" class="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
			   		<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-cell--4-col-desktop">
			      		<div class="mdl-card__title mdl-card--expand">
			        		<img src="https://maps.googleapis.com/maps/api/staticmap?center={{ (item.lat) }},{{ (item.long) }}&zoom=5&size=400x400&maptype=roadmap&key=AIzaSyBgIfTcWVPgWam3gxncC8BTjjrrbr2nwCA" alt="">
			     		</div>
			      	<div class="mdl-card__supporting-text mdl-color-text--grey-600">
			        	<h4>Evento</h4>
			      	</div>
			      	<ul class="list-item mdl-list">
			        	<li class="mdl-list__item">
			          	<span class="mdl-list__item-primary-content">
			            	Luogo: xxxxx
			          	</span>
			        	</li>
			        	<li class="mdl-list__item">
			          	<span class="mdl-list__item-primary-content">
			            	Data: xxxxx
			          	</span>
			        	</li>
			      	</ul>
		    	</div>
	    	</div>
  `,
  styleUrls: ['./eventi.component.css']
})
export class EventiComponent implements OnInit {

  items: FirebaseListObservable<any>;
 sizeSubject: Subject<any>;
  
  constructor(db: AngularFireDatabase ) {
  	this.sizeSubject = new Subject();
  	this.items = db.list('/maps', {
  		query: {
  			limitToLast: 50
  		}
  	});
  }

  ngOnInit() {
  }

}
