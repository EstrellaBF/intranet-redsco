import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginasComponent } from './paginas.component';

export const PAGINAS_ROUTES: Routes = [
  { path: 'inicio-sesion', component: PaginasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(PAGINAS_ROUTES)],
  exports: [RouterModule]
})

export class PaginasRoutingModule {}
