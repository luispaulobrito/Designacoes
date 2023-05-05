export class Publicador {
   id : number = 0;
   nome: string = "";  
   sexo: string = "";  
   flBatismo: boolean = false;  
   perfil: string = "";  
   publicadorTipo: string = "";  
   observacao: string = "";  

   constructor(nome: string, sexo: string, flBatismo: boolean, perfil: string, publicadorTipo: string, observacao: string) {
      this.nome = nome;
      this.sexo = sexo;
      this.flBatismo = flBatismo;
      this.perfil = perfil;
      this.publicadorTipo = publicadorTipo;
      this.observacao = observacao;
    }
} 