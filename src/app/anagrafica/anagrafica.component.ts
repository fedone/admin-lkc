import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-anagrafica',
  template: `
	<ul class="demo-list-three mdl-list">
      <li *ngFor="let item of items | async" class="mdl-list__item mdl-list__item--three-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">person</i>
          <span>{{ (item.text) }}</span>
          <span class="mdl-list__item-text-body">
            {{ (item.grade) }}
          </span>
        </span>
      </li>
  	</ul>
	
  `,
  styleUrls: ['./anagrafica.component.css'],
})
export class AnagraficaComponent implements OnInit {
   
 items: FirebaseListObservable<any>;
 sizeSubject: Subject<any>;
  
  constructor(db: AngularFireDatabase ) {
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
