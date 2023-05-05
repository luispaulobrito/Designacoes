import { Component, OnInit } from '@angular/core';
import { PublicadorService } from '../publicador.service';
import { Publicador } from './publicador';

@Component({
  selector: 'app-publicador',
  templateUrl: './publicador.component.html',
  styleUrls: ['./publicador.component.css']
})
export class PublicadorComponent implements OnInit {
  constructor(
    private service : PublicadorService
  ){}

  ngOnInit(): void {
      const p : Publicador = new Publicador();
      p.nome = "Luis Paulo";
      p.flBatismo = true;
      p.sexo = "M";
      p.perfil = "SM";
      p.publicadorTipo = "PA";  

      this.service.save(p).subscribe(resposta => 
        console.log(resposta))
  }  
}
