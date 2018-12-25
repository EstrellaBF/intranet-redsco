import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalContainer } from './portal.container';

export const PORTAL_ROUTES: Routes = [
  {
    path: 'principal',
    component: PortalContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(PORTAL_ROUTES)],
  exports: [RouterModule]
})
export class PortalRoutingModule {}
