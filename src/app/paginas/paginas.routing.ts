import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
// import { PaginasComponent } from './paginas.component';

export const PAGINAS_ROUTES: Routes = [
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'portal', loadChildren: './portal/portal.module#PortalModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(PAGINAS_ROUTES)],
  exports: [RouterModule]
})

export class PaginasRoutingModule {}
