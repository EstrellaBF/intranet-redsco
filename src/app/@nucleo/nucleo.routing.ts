import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

export const NUCLEO_ROUTES: Routes = [
	{
		path: '',
		redirectTo: '/portal/principal',
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '/portal/principal'
	}
];

const config: ExtraOptions = {
	// tslint:disable-next-line:indent
	useHash: true
};

@NgModule({
	imports: [ RouterModule.forRoot(NUCLEO_ROUTES, config) ],
	exports: [ RouterModule ]
})
export class NucleoRoutingModule {}
