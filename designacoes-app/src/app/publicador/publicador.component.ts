import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { PublicadorService } from '../publicador.service';
import { Publicador } from './publicador';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicador',
  templateUrl: './publicador.component.html',
  styleUrls: ['./publicador.component.css']
})
export class PublicadorComponent implements OnInit {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  formulario: FormGroup;
  publicadores: Publicador[] = [];
  colunas = ['id','nome','sexo','flBatismo','perfil','publicadorTipo','observacao', 'acoes'];
  publicadorSelecionado: Publicador = new Publicador('', '', false, '', '', '');

  constructor(
    private service : PublicadorService,
    private fb : FormBuilder
  ){
    this.formulario = this.fb.group({});
    this.publicadorSelecionado = new Publicador('', '', false, '', '', '');
  }

  ngOnInit(): void {
    this.montarFormulario();
    this.listarPublicadores();
  }

  montarFormulario(){
    this.formulario = this.fb.group({
      nome : ['', Validators.required],
        sexo : ['', Validators.required],
        flBatismo : ['', Validators.required],
        perfil : ['', Validators.required],
        publicadorTipo : ['', Validators.required],
        observacao : ['', Validators.required],
    })
  }

  listarPublicadores(){
    this.service.list().subscribe(response => {
      this.publicadores = response;
    })
  }

  submit() {
    const publicador = this.formulario.value as Publicador;
    if (!this.publicadorSelecionado) {
      this.service.save(publicador).subscribe(() => {
        this.formulario.reset();
        this.listarPublicadores();
      });
    } else {
      publicador.id = this.publicadorSelecionado.id;
      this.service.atualizar(publicador).subscribe(() => {
        this.formulario.reset();
        this.publicadorSelecionado;
        this.listarPublicadores();
      });
    }
  }
  
  excluir(publicador: Publicador){
    this.service.deletar(publicador).subscribe(() => {
      this.publicadores = this.publicadores.filter(p => p !== publicador);
    });
  }
  
  editar(publicador: Publicador): void {
    this.publicadorSelecionado = publicador;
    this.formulario.patchValue(publicador);
    this.tabGroup.selectedIndex = 1;
  }

  atualizar(){
    const formValues = this.formulario.value
    const publicador : Publicador = new Publicador(formValues.nome, formValues.sexo, formValues.flBatismo, formValues.perfil, formValues.publicadorTipo, formValues.observacao)
    this.service.atualizar(publicador).subscribe(resposta => {
      const index = this.publicadores.findIndex(p => p.id === publicador.id);
      this.publicadores[index] = resposta;
      this.publicadorSelecionado;
    });
  }
}
