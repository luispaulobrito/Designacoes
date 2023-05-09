import { Component, OnInit } from '@angular/core';
import { PublicadorService } from '../publicador.service';
import { Publicador } from './publicador';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicador',
  templateUrl: './publicador.component.html',
  styleUrls: ['./publicador.component.css']
})
export class PublicadorComponent implements OnInit {

  formulario: FormGroup;
  publicadores: Publicador[] = [];
  colunas = ['id','nome','sexo','flBatismo','perfil','publicadorTipo','observacao']

  constructor(
    private service : PublicadorService,
    private fb : FormBuilder
  ){
    this.formulario = this.fb.group({});
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

  submit(){
    const formValues = this.formulario.value
    const publicador : Publicador = new Publicador(formValues.nome, formValues.sexo, formValues.flBatismo, formValues.perfil, formValues.publicadorTipo, formValues.observacao)
    this.service.save(publicador).subscribe(resposta => {
      let lista : Publicador[] = [... this.publicadores, resposta]
      this.publicadores = lista;
    })
  }  
}
