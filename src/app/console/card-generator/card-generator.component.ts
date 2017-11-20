import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-card-generator',
  template: `
	<div [@fade] *ngFor="let item of items | async" class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-cell--3-col-desktop">
	  <div class="mdl-card__title mdl-card--expand mdl-color--grey-300">
	    <img src="assets/images{{ (item.img) }}" class="avatar avatar-card" alt="">
	    <h2 class="mdl-card__title-text"><strong>{{ (item.text) }}</strong></h2>
	  </div>
	  <div class="mdl-card__supporting-text mdl-color-text--grey-600">
	    Dati anagrafici:
	  </div>
	  <div class="mdl-card__supporting-text mdl-color-text--black-500">{{ (item.text) }}</div>
	  <div class="mdl-card__supporting-text mdl-color-text--black-500">{{ (item.grade) }}</div>
	</div>
  `,
  styleUrls: ['./card-generator.component.css'],
   animations: [ trigger('fade', [
      transition(':enter', [style({opacity: 0}), animate('.3s ease')])
    ])
  ]
})
export class CardGeneratorComponent implements OnInit {
  
  items: FirebaseListObservable<any>;
  sizeSubject: Subject<any>; 
  


  constructor(db: AngularFireDatabase) {

  this.sizeSubject = new Subject();
  this.items = db.list('/soci', {
  	query: {
  		limitToLast: 50
  	}
  });

  }

  ngOnInit() {
  }

}
