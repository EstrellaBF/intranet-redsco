import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

import { PortalContainer } from './portal.container';
import { PortalRoutingModule } from './portal.routing';


@NgModule({
  declarations: [
    PortalContainer
  ],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class PortalModule { }
