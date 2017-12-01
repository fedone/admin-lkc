import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// Router module

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.service';

// Modulo Animazioni @angular

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modulo per inviare le notifiche push tramite Google Cloud Messaging
// TODO: Implementare Google Cloud Messaging

import { MessagingService } from './messaging.service';

import { BaseRequestOptions } from '@angular/http';

//  Direttive firebase per autenticazione e database

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import 'hammerjs';

import { AppComponent } from './app.component';

import {enableProdMode} from '@angular/core';

// View Component

import { LoginComponent } from './login/login.component';
import { ContabilitaComponent } from './contabilita/contabilita.component';
import { EventiComponent } from './eventi/eventi.component';
import { ConsoleComponent } from './console/console.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';
import { TeamBuilderComponent } from './team-builder/team-builder.component'; 

// Direttive per angular-google-maps

import { AgmCoreModule } from '@agm/core';

// Sottocomponenti della console principale e della sezione eventi

import { StaticMapGeneratorComponent } from './eventi/static-map-generator';
import { CardGeneratorComponent } from './console/card-generator/card-generator.component';

// Moduli per Grafici

import { PieChartComponent } from './contabilita/pie-chart/pie-chart.component';
import { LineChartComponent } from './contabilita/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';

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
    AnagraficaComponent,
    StaticMapGeneratorComponent,
    TeamBuilderComponent,
    CardGeneratorComponent,
    PieChartComponent,
    LineChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8AHDsIihOdL2e7ugvH1KzSGZW_eDBUvA'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    ChartsModule
  ],
  providers: [AuthGuard,AngularFireAuth, AngularFireDatabase, MessagingService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
