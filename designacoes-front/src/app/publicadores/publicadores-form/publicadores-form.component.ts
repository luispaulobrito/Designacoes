import { Component } from '@angular/core';
import { Publicador } from '../publicador';
import { PublicadoresService } from 'src/app/publicadores.service';

@Component({
  selector: 'app-publicadores-form',
  templateUrl: './publicadores-form.component.html',
  styleUrls: ['./publicadores-form.component.css']
})
export class PublicadoresFormComponent {
  publicador: Publicador;
  success: boolean = false;  
  errors: string[] = [];

  constructor(private service: PublicadoresService){
    this.publicador = new Publicador("","",false,"","","");
  }

  onSubmit(){
    this.service.salvar(this.publicador).subscribe( response => {this.success=true}, error => {
      console.log(error);
      this.errors = error.error.error;
      console.log(error.error.error);
      
    })
  }
}
