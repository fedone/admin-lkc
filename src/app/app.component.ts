import { Component, ViewChild } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Admin LKC';

	public user: Observable<firebase.User>;

	getUser(user){
		let getEmail = document.querySelector('#account');
		getEmail.textContent = user; 
	}
}
