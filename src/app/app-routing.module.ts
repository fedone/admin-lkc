import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';
import { EventiComponent } from './eventi/eventi.component';
import { ContabilitaComponent } from './contabilita/contabilita.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';

import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.service';

import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'console',
		component: ConsoleComponent,
		canActivate: [AuthGuard],
		data: { title: 'Console' }
	},
	{
		path: 'contabilita',
		component: ContabilitaComponent,
		canActivate: [AuthGuard],
		data: { title: 'Contabilità' }
	},
	{
		path: 'eventi',
		component: EventiComponent,
		canActivate: [AuthGuard],
		data: { title: 'Eventi' }
	},
	{
		path: 'anagrafica',
		component: AnagraficaComponent,
		canActivate: [AuthGuard],
		data: { title: 'Anagrafica' }
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
})
export class AppRoutingModule { 
	constructor(private route: ActivatedRoute){}
}