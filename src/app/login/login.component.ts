import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string = '';
  password: string = '';
  error: any;
  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(auth => {
      if(auth) {
        this.router.navigate(['console']);
      } else {
        router.navigate(['login']);
      }
    });

  }

  login() {
    this.af.auth.signInWithEmailAndPassword(this.email, this.password)
    .catch((error) => { console.log(error); });
  }
   
  ngOnInit() {

  }

}




