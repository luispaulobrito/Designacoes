import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertaSucessoComponent } from './alerta-sucesso/alerta-sucesso.component';
import { AlertaErroComponent } from './alerta-erro/alerta-erro.component';



@NgModule({
  declarations: [
    AlertaSucessoComponent,
    AlertaErroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertaSucessoComponent, 
    AlertaErroComponent]
})
export class AlertasModule { }
