import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas.routing';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

// demo
// import { PaginasComponent } from './paginas.component';

@NgModule({
	imports: [ CommonModule, PaginasRoutingModule ],
	declarations: [ InicioSesionComponent ]
})
export class PaginasModule {}
