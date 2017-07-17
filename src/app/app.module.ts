import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BaseRequestOptions } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import 'hammerjs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContabilitaComponent } from './contabilita/contabilita.component';
import { EventiComponent } from './eventi/eventi.component';
import { ConsoleComponent } from './console/console.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';

import { AgmCoreModule } from '@agm/core';

export const firebaseConfig = {

    apiKey: "AIzaSyBZLjO1z3cmykyqPCnAofpB0S_K0l3FdAs",
    authDomain: "lambrate-firebase-console.firebaseapp.com",
    databaseURL: "https://lambrate-firebase-console.firebaseio.com",
    projectId: "lambrate-firebase-console",
    storageBucket: "lambrate-firebase-console.appspot.com",
    messagingSenderId: "180088518330"

};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContabilitaComponent,
    EventiComponent,
    ConsoleComponent,
    AnagraficaComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8AHDsIihOdL2e7ugvH1KzSGZW_eDBUvA'
    }),
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [AuthGuard,AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
