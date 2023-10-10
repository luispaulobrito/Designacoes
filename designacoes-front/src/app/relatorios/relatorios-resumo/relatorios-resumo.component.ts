import { Component } from '@angular/core';
import { ResumoRelatorio } from 'src/app/shared/domain/resumo-relatorio';
import { RelatoriosService } from 'src/app/shared/services/relatorios.service';
import { MesesOptions } from 'src/app/enum/meses.enum';

@Component({
  selector: 'app-relatorios-resumo',
  templateUrl: './relatorios-resumo.component.html',
  styleUrls: ['./relatorios-resumo.component.css']
})
export class RelatoriosResumoComponent {
  
  resumoRelatorios: ResumoRelatorio[] = [];
  meses = MesesOptions;
  selectedMonth: number = 0;
  selectedYear: number = 0;
  yearsRange: number[] = [];
  currentDate = new Date();
  mes: number = 0;
  ano: number = 0;

  constructor(private relatoriosService: RelatoriosService) { }

  ngOnInit(): void {
    this.selecionarMes();
    this.selecionarAno();
    this.inicializarRelatorios()
  }

  inicializarRelatorios(){
    this.filtrarResumoRelatoriosPorMesEAno();
  }

  filtrarResumoRelatoriosPorMesEAno(){
    this.relatoriosService.getResumoRelatorio(this.selectedYear, this.selectedMonth).subscribe(
      (data: ResumoRelatorio[]) => {
        this.resumoRelatorios = data;
        console.log(this.resumoRelatorios);
      },
      (error) => {
        console.error(error);
      }
    );
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
}
