import { Relatorio } from "./relatorio";

export class Publicador {
    id : number = 0;
    nome: string = "";  
    sexo: string = "";  
    flBatismo: boolean = true;  
    perfil: string = "";  
    publicadorTipo: string = "";  
    observacao: string = ""; 
    relatorioDTO: Relatorio = new Relatorio('',0,0,false,0,0,0,0,0,''); 
 
    constructor(nome: string, sexo: string, flBatismo: boolean, perfil: string, publicadorTipo: string, observacao: string) {
       this.nome = nome;
       this.sexo = sexo;
       this.flBatismo = flBatismo;
       this.perfil = perfil;
       this.publicadorTipo = publicadorTipo;
       this.observacao = observacao;
       this.relatorioDTO = this.relatorioDTO;
     }
 } 