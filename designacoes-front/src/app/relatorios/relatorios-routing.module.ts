import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatoriosFormComponent } from './relatorios-form/relatorios-form.component';

const routes: Routes = [
  {path: 'relatorios-form', component: RelatoriosFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
