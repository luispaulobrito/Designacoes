import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBatismoIconesDirective } from './diretivas/status-batismo-icones.directive';



@NgModule({
  declarations: [
    StatusBatismoIconesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusBatismoIconesDirective
  ]
})
export class SharedModule { }
