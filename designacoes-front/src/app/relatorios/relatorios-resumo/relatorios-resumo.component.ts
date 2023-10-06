import { Component } from '@angular/core';
import { ResumoRelatorio } from 'src/app/shared/domain/resumo-relatorio';
import { RelatoriosService } from 'src/app/shared/services/relatorios.service';

@Component({
  selector: 'app-relatorios-resumo',
  templateUrl: './relatorios-resumo.component.html',
  styleUrls: ['./relatorios-resumo.component.css']
})
export class RelatoriosResumoComponent {
  resumoRelatorios: ResumoRelatorio[] = [];

  constructor(private relatoriosService: RelatoriosService) { }

  ngOnInit(): void {
    this.buscarResumoRelatorios();
  }

  buscarResumoRelatorios(){
    this.relatoriosService.getResumoRelatorio(2023, 8).subscribe(
      (data: ResumoRelatorio[]) => {
        this.resumoRelatorios = data;
        console.log(this.resumoRelatorios);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
