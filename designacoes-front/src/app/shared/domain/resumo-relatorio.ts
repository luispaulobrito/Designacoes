export class ResumoRelatorio {
    mes : number = 0;
    ano : number = 0;
    publicadorTipo : string = '';
    observacao: number = 0;  
    publicacoes : number = 0;
    videos : number = 0;
    horas : number = 0;
    revisitas : number = 0;
    estudos : number = 0;
 
    constructor(mes: number, ano: number, publicadorTipo : string, observacao: number, publicacoes: number, videos: number, horas: number, revisitas: number, estudos: number) {
       this.mes = mes;
       this.ano = ano;
       this.publicadorTipo = publicadorTipo;
       this.observacao = observacao;
       this.publicacoes = publicacoes;
       this.videos = videos;
       this.horas = horas;
       this.revisitas = revisitas;
       this.estudos = estudos;
     }
 } 

  