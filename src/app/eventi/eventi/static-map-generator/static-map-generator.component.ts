import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { fadeInAnimation } from '../../_animations/index';

@Component({
  selector: 'app-static-map-generator',
  template: `<div *ngFor="let item of items | async" class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-cell--3-col-desktop">
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
  	</ul>
</div>
<div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-cell--3-col-desktop">
            <div class="mdl-card__title title-event mdl-color--primary mdl-color-text--white">
              <h2 class="mdl-card__title-text">Aggiungi Evento</h2>
            </div>
            <div class="mdl-card__supporting-text">
            <form name="form" id="eventForm" > 
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group">
                  <input name="email" id="location" class="mdl-textfield__input form-control" type="text" />
                  <label for="location" class="mdl-textfield__label" >Città</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group">
                  <input name="email" id="date" class="mdl-textfield__input" type="text" />
                  <label for="date" class="mdl-textfield__label">Data</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group">
                  <input name="email" id="long" class="mdl-textfield__input" type="text" />
                  <label for="long" class="mdl-textfield__label">Longitudine</label>
              </div>
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group">
                  <input name="email" id="lat" class="mdl-textfield__input" type="text" />
                  <label for="lat" class="mdl-textfield__label">Latitudine</label>
              </div>
            </form>
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Aggiungi evento</button>
            </div>
          </div>`,
  styleUrls: ['./static-map-generator.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
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

function pushEvent(db: AngularFireDatabase){


}
