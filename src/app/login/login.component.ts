import { Component, OnInit, HostBinding, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-login', 
  template: `<div class="mdl-layout mdl-js-layout mdl-color--grey-100">
            <main class="mdl-layout__content">
              <div class="mdl-card mdl-shadow--6dp">
                <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                  <h2 class="mdl-card__title-text"><strong>Admin LKC</strong></h2>
                  <img src="/assets/images/logo-lkc-login.png" class="logo" alt="logo">
                </div>
                <div class="mdl-card__supporting-text">
                <form name="form" >
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group">
                      <input name="email" class="mdl-textfield__input form-control" type="text" [(ngModel)]="email" ngDefaultControl/>
                      <label class="mdl-textfield__label" >Username</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label form-group">
                      <input name="email" class="mdl-textfield__input" type="password" [(ngModel)]="password" ngDefaultControl/>
                      <label class="mdl-textfield__label">Password</label>
                  </div>
                  <div id="errorDisplay"></div>
                </form>
                </div>
                <div class="mdl-card__actions mdl-card--border">
                  <button (click)="login()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Login</button>
                </div>
              </div>
            </main>
          </div>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`,
  styleUrls: ['./login.component.css'],
  animations: [ trigger('fade', [
      transition(':enter', [style({opacity: 0}), animate('.8s ease')])
    ])
  ]
})
export class LoginComponent implements OnInit {


  email: string = '';
  password: string = '';

  error: string;

  constructor(public af: AngularFireAuth, private router: Router, private _renderer2: Renderer2, @Inject(DOCUMENT) private _document) {

    this.af.authState.subscribe(auth => {
      if(auth) {
        this.router.navigate(['console']);
        location.reload();
      } else {
        router.navigate(['login']);
      }
    });

  }

  login() {

    this.af.auth.signInWithEmailAndPassword(this.email, this.password)
    .catch((error: any) => {

      let errorHandler = document.getElementById('errorDisplay');
      errorHandler.style.color = 'red';
      errorHandler.textContent = error;

    });
  }

   
  public ngOnInit() {

    let s = this._renderer2.createElement('script');
    s.src = `https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js`;

    this._renderer2.appendChild(this._document.body, s);

    let s2 = this._renderer2.createElement('script');
    s2.text = `
        document.addEventListener("DOMContentLoaded", function(event) { 
        if (window.location.href.indexOf("/login") != -1) {
             $("nav").hide();
             $(".mdl-layout__drawer-button").hide();
             $("header").hide();
             $("#drawer").remove();
             $("main").css("margin-left", "0px");
        } else if(window.location.href.indexOf("/console")) {
          $("nav").show();
          $(".mdl-layout__drawer-button").show();
        }
      });`;

      this._renderer2.appendChild(this._document.body, s2);
  }

}




