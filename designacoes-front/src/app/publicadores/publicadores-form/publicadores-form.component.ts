import { Component } from '@angular/core';
import { Publicador } from '../../shared/domain/publicador';
import { PublicadoresService } from 'src/app/shared/services/publicadores.service';
import { PublicadorPerfilOptions } from 'src/app/enum/publicador-perfil.enum';
import { PublicadorTipoOptions } from 'src/app/enum/publicador-tipo.enum';

@Component({
  selector: 'app-publicadores-form',
  templateUrl: './publicadores-form.component.html',
  styleUrls: ['./publicadores-form.component.css']
})
export class PublicadoresFormComponent {
  publicador: Publicador;
  success: boolean = false;  
  errors: string[] = [];
  publicadorTipos = PublicadorTipoOptions;
  publicadorPerfis = PublicadorPerfilOptions;

  constructor(private service: PublicadoresService){
    this.publicador = new Publicador("","",false,"","","");
  }

  onSubmit() {
    this.service.salvar(this.publicador).subscribe(
        response => {
            this.success = true;
            this.publicador = new Publicador("", "", false, "", "", ""); // Reinicia os valores do formulário
        },
        error => {
            this.errors = error.error.error;
            console.error(error);
        }
    );
}

}
