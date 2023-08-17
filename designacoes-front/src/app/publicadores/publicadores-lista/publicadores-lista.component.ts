import { Component } from '@angular/core';
import { Publicador } from '../../shared/domain/publicador';
import { PublicadoresService } from 'src/app/shared/services/publicadores.service';

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
      this.publicadorService.getPublicadoresFiltrados(this.termoBusca).subscribe(
        (data: Publicador[]) => {
          this.publicadores = data;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  
}
