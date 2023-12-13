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
 
    constructor() {}
 } 