import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicadoresRoutingModule } from './publicadores-routing.module';
import { PublicadoresFormComponent } from './publicadores-form/publicadores-form.component';
import { PublicadoresListaComponent } from './publicadores-lista/publicadores-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicadoresFormComponent,
    PublicadoresListaComponent
  ],
  imports: [
    CommonModule,
    PublicadoresRoutingModule,
    FormsModule
  ]
})
export class PublicadoresModule { }
