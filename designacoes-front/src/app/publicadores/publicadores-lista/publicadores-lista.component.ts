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
  publicadorExcluir: string = '';
  publicadoSelecionado: Publicador = new Publicador();
  mensagemSucesso: boolean = false;
  mensagemErro: boolean = false;

  constructor(private publicadorService: PublicadoresService){}

  ngOnInit() {
    this.getPublicadores();
  }  

  getPublicadores(){
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
      this.publicadorService.getPublicadoresFiltrados(this.termoBusca).subscribe(
        (data: Publicador[]) => {
          this.publicadores = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  preparaDelecao(publicador: Publicador){
    this.publicadoSelecionado = publicador;
  }

  excluirPublicador(){
    this.publicadorService.excluir(this.publicadoSelecionado)
      .subscribe(response => {
         this.mensagemSucesso = true 
         this.getPublicadores(); 
        }, 
        erro => this.mensagemErro = true)
  }
  
}
