import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas.routing';

// demo
import { PaginasComponent } from './paginas.component';

@NgModule({
	imports: [ CommonModule, PaginasRoutingModule ],
	declarations: [ PaginasComponent ]
})
export class PaginasModule {}
