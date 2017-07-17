import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';
import { EventiComponent } from './eventi/eventi.component';
import { ContabilitaComponent } from './contabilita/contabilita.component';
import { AnagraficaComponent } from './anagrafica/anagrafica.component';
import { NgModule } from '@angular/core';

import { AuthGuard } from './auth.service';

import { Routes, RouterModule } from '@angular/router';

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
		canActivate: [AuthGuard]
	},
	{
		path: 'contabilita',
		component: ContabilitaComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'eventi',
		component: EventiComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'anagrafica',
		component: AnagraficaComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
})
export class AppRoutingModule { }