import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NucleoComponent } from './@nucleo/nucleo.component';
import { NucleoModule } from './@nucleo/nucleo.module';
@NgModule({
  declarations: [],
  imports: [
    BrowserModule, NucleoModule
  ],
  providers: [],
  bootstrap: [NucleoComponent]
})
export class AppModule { }
