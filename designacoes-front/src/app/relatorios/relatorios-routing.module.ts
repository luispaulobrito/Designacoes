import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatoriosFormComponent } from './relatorios-form/relatorios-form.component';
import { RelatoriosListaComponent } from './relatorios-lista/relatorios-lista.component';
import { RelatoriosResumoComponent } from './relatorios-resumo/relatorios-resumo.component';

const routes: Routes = [
  {path: 'relatorios-form', component: RelatoriosFormComponent},
  {path: 'relatorios-form/:id', component: RelatoriosFormComponent},
  {path: 'relatorios-lista', component: RelatoriosListaComponent},
  {path: 'relatorios-resumo', component: RelatoriosResumoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
