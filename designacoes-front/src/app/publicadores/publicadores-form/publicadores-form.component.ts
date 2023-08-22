import { Component } from '@angular/core';
import { Publicador } from '../../shared/domain/publicador';
import { PublicadoresService } from 'src/app/shared/services/publicadores.service';
import { PublicadorPerfilOptions } from 'src/app/enum/publicador-perfil.enum';
import { PublicadorTipoOptions } from 'src/app/enum/publicador-tipo.enum';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

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
  id: number = 0;

  constructor(
    private service: PublicadoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.publicador = new Publicador("", "", false, "", "", "");
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getPublicadorById(this.id)
          .subscribe(
            response => this.publicador = response,
            errorResponse => this.publicador = new Publicador("", "", false, "", "", "")
          );
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.publicador).subscribe(
        response => {
          this.success = true;
          this.publicador = new Publicador("", "", false, "", "", ""); 
        },
        error => {
          this.errors = ['Erro ao atualizar publicador'];
        }
      );
    }else{
      this.service.salvar(this.publicador).subscribe(
        response => {
          this.success = true;
          this.publicador = new Publicador("", "", false, "", "", ""); 
        },
        error => {
          this.errors = error.error.error;
        }
        );
      }
  }
}
