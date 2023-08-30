import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicadoresRoutingModule } from './publicadores-routing.module';
import { PublicadoresFormComponent } from './publicadores-form/publicadores-form.component';
import { PublicadoresListaComponent } from './publicadores-lista/publicadores-lista.component';
import { FormsModule } from '@angular/forms';
import { AlertasModule } from '../alertas/alertas.module';
import { TraduzirGeneroPipe } from '../pipes/traduzir-genero.pipe';
import { BatismoPipe } from '../pipes/batismo.pipe';
import { PerfilPipe } from '../pipes/perfil.pipe';
import { PublicadorTipoPipe } from '../pipes/publicador-tipo.pipe';


@NgModule({
  declarations: [
    PublicadoresFormComponent,
    PublicadoresListaComponent,
    TraduzirGeneroPipe,
    BatismoPipe,
    PerfilPipe,
    PublicadorTipoPipe
  ],
  imports: [
    CommonModule,
    PublicadoresRoutingModule,
    FormsModule,
    AlertasModule,
    SharedModule
  ]
})
export class PublicadoresModule { }
