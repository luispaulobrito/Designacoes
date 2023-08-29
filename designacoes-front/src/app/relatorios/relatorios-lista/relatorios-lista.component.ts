import { RelatoriosService } from './../../shared/services/relatorios.service';
import { Component } from '@angular/core';
import { MesesOptions } from 'src/app/enum/meses.enum';
import { Relatorio } from 'src/app/shared/domain/relatorio';

@Component({
  selector: 'app-relatorios-lista',
  templateUrl: './relatorios-lista.component.html',
  styleUrls: ['./relatorios-lista.component.css']
})
export class RelatoriosListaComponent {
  relatorios: Relatorio[] = [];
  publicadores: any[] = [];
  meses = MesesOptions;
  selectedMonth: number = 0;
  selectedYear: number = 0;
  yearsRange: number[] = [];
  currentDate = new Date();
  mes: number = 0;
  ano: number = 0;
  relatorioSelecionado: Relatorio = new Relatorio('', 0, 0, true, 0, 0, 0, 0, 0, '');
  mensagemSucesso: boolean = false;
  mensagemErro: boolean = false;

  constructor(private relatoriosService: RelatoriosService) { }

  ngOnInit(): void {
    this.selecionarMes();
    this.selecionarAno();
    this.inicializarRelatorios();
  }
  
  inicializarRelatorios(){
    this.filtrarRelatoriosPorMesEAno();

  }

  selecionarMes() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    const previousMonth = (this.currentDate.getMonth() + 1);
    this.selectedMonth = previousMonth;
  }

  selecionarAno() {
    const currentYear = this.currentDate.getFullYear();
    const yearsToDisplay = 5;
    for (let i = currentYear - yearsToDisplay; i <= currentYear + yearsToDisplay; i++) {
      this.yearsRange.push(i);
    }
    this.selectedYear = currentYear;
  }

  filtrarRelatoriosPorMesEAno() {
    this.relatoriosService.getRelatoriosPorMesEAno(this.selectedYear, this.selectedMonth).subscribe(
      (data: Relatorio[]) => {
        this.relatorios = data;
        this.publicadores = this.relatorios;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  preparaDelecao(relatorioDTO: Relatorio) {
    this.relatorioSelecionado = relatorioDTO;
    console.log(this.relatorioSelecionado);

  }

  excluirRelatorio() {
    this.relatoriosService.excluir(this.relatorioSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = true
        this.inicializarRelatorios();
      },
        erro => this.mensagemErro = true)
  }


  restoreSelectionAndCallOnInit() {
    this.ngOnInit();
  }
}