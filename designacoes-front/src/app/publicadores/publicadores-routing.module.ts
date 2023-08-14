import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicadoresFormComponent } from './publicadores-form/publicadores-form.component';
import { PublicadoresListaComponent } from './publicadores-lista/publicadores-lista.component';

const routes: Routes = [
  {path: 'publicadores-form', component: PublicadoresFormComponent},
  {path: 'publicadores-lista', component: PublicadoresListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicadoresRoutingModule { }
