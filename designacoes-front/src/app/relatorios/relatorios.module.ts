import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatoriosFormComponent } from './relatorios-form/relatorios-form.component';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RelatoriosFormComponent
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    FormsModule
  ]
})
export class RelatoriosModule { }
