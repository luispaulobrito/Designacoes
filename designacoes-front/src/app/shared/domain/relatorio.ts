export class Relatorio {
    nomePublicador : string = '';
    id : number = 0;
    idPublicador : number = 0;
    mes : number = 0;
    ano : number = 0;
    pioneiroAuxiliar: boolean = false;  
    publicacoes : number = 0;
    videos : number = 0;
    horas : number = 0;
    revisitas : number = 0;
    estudos : number = 0;
    observacao: string = "";  
 
    constructor(nomePublicador: string, mes: number, ano: number, pioneiroAuxiliar: boolean, publicacoes: number, videos: number, horas: number, revisitas: number, estudos: number, observacao: string) {
       this.nomePublicador = nomePublicador;
       this.mes = mes;
       this.ano = ano;
       this.pioneiroAuxiliar = pioneiroAuxiliar;
       this.publicacoes = publicacoes;
       this.videos = videos;
       this.horas = horas;
       this.revisitas = revisitas;
       this.estudos = estudos;
       this.observacao = observacao;
     }
 } 

  