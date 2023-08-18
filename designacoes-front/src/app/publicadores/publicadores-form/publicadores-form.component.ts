import { Component } from '@angular/core';
import { Publicador } from '../../shared/domain/publicador';
import { PublicadoresService } from 'src/app/shared/services/publicadores.service';

@Component({
  selector: 'app-publicadores-form',
  templateUrl: './publicadores-form.component.html',
  styleUrls: ['./publicadores-form.component.css']
})
export class PublicadoresFormComponent {
  publicador: Publicador;
  success: boolean = false;  
  errors: string[] = [];
  publicadorTipos = [
    { value: 'PB', label: 'Publicador' },
    { value: 'PA', label: 'Pioneiro Auxiliar' },
    { value: 'PI', label: 'Pioneiro Auxiliar Indeterminado' },
    { value: 'PR', label: 'Pioneiro Regular' }
  ];
  publicadorPerfis = [
    { value: 'SM', label: 'Servo Ministerial' },
    { value: 'AN', label: 'Ancião' },
    { value: 'NP', label: 'Não Possui' }
  ];

  constructor(private service: PublicadoresService){
    this.publicador = new Publicador("","",false,"","","");
  }

  onSubmit(){
    this.service.salvar(this.publicador).subscribe( response => {this.success=true}, error => {
      this.errors = error.error.error;
      // console.log(error);
      // console.log(error.error.error);
      
    })
  }
}
