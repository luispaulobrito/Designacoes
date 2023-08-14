import { Component } from '@angular/core';
import { Publicador } from '../publicador';
import { PublicadoresService } from 'src/app/publicadores.service';

@Component({
  selector: 'app-publicadores-lista',
  templateUrl: './publicadores-lista.component.html',
  styleUrls: ['./publicadores-lista.component.css']
})
export class PublicadoresListaComponent {
  publicadores: Publicador[] = [];
  termoBusca: string = '';

  constructor(private publicadorService: PublicadoresService){}

  ngOnInit() {
    this.publicadorService.getPublicadores().subscribe(
      (data: Publicador[]) => {
        this.publicadores = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }  

  filtrarPublicadores() {
    if (this.termoBusca === '') {
      this.publicadorService.getPublicadores().subscribe(
        (data: Publicador[]) => {
          this.publicadores = data;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.publicadores = this.publicadores.filter(publicador =>
        publicador.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
      );
    }
  }

  traduzirPerfil(perfil: string): string {
    switch (perfil) {
      case 'AN':
        return 'Ancião';
      case 'SM':
        return 'Servo Ministerial';
      case 'NP':
        return '-';
      default:
        return perfil;
    }
  }

  traduzirPublicador(publicador: string): string {
    switch (publicador) {
      case 'PB':
        return 'Publicador';
      case 'PA':
        return 'Pioneiro Auxiliar';
      case 'PI':
        return 'Pioneiro Auxiliar Indeterminado';
      case 'PR':
        return 'Pioneiro Regular';
      default:
        return publicador;
    }
  }
  
}
