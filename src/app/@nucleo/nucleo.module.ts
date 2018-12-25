import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Module
import { NucleoRoutingModule } from './nucleo.routing';

import { NucleoComponent } from './nucleo.component';
import { PaginasModule } from '../paginas/paginas.module';


@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule,
    PaginasModule
  ],
  declarations: [ NucleoComponent ],
  exports: [ NucleoComponent ]
})
export class NucleoModule { }
