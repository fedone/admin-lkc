import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-anagrafica',
  template: `
	<ul class="demo-list-three mdl-list">
          <li *ngFor="let item of items | async" class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
              <i class="material-icons mdl-list__item-avatar">person</i>
              <span>{{ items.nome }}</span>
              <span class="mdl-list__item-text-body">
                {{ items.grado }}
              </span>
            </span>
          </li>
      </ul>
	
  `,
  styleUrls: ['./anagrafica.component.css'],
})
export class AnagraficaComponent implements OnInit {
  
 
 items: FirebaseListObservable<any[]>;
 nome: string;
 grado: string
  
  constructor(db: AngularFireDatabase ) { 
  	this.items = db.list('/soci');
  }

  ngOnInit() {
  }

}
