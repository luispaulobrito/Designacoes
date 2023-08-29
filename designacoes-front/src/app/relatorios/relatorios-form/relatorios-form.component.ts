import { Observable } from 'rxjs';
import { RelatoriosService } from './../../shared/services/relatorios.service';
import { Component } from '@angular/core';
import { MesesOptions } from 'src/app/enum/meses.enum';
import { Publicador } from 'src/app/shared/domain/publicador';
import { Relatorio } from 'src/app/shared/domain/relatorio';
import { PublicadoresService } from 'src/app/shared/services/publicadores.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-relatorios-form',
  templateUrl: './relatorios-form.component.html',
  styleUrls: ['./relatorios-form.component.css']
})
export class RelatoriosFormComponent {

  publicadores: Publicador[] = [];
  relatorio: Relatorio;
  meses = MesesOptions;
  selectedMonth: number = 0;
  selectedYear: number = 0;
  yearsRange: number[] = [];
  currentDate = new Date();
  success: boolean = false;
  errors: string = '';
  id: number = 0;

  constructor(
    private publicadoresService: PublicadoresService,
    private relatoriosService: RelatoriosService,
    private activatedRoute: ActivatedRoute
  ) {
    this.relatorio = new Relatorio('', 0, 0, false, 0, 0, 0, 0, 0, '');
  }


  ngOnInit(): void {
    this.carregarDados();
    this.selecionarMes();
    this.selecionarAno();
    this.carregarPublicadores();
  }

  carregarDados(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.relatoriosService
          .getRelatorioById(this.id)
          .subscribe(
            response => this.relatorio = response,
            errorResponse => this.relatorio = new Relatorio('', 0, 0, false, 0, 0, 0, 0, 0, '')
          );
      }
    });
  }

  adicionarObservacao() {
    if (!this.relatorio.pioneiroAuxiliar) {
      this.relatorio.observacao = 'PIONEIRO AUXILIAR'
    } else {
      this.relatorio.observacao = ''
    }
  }

  onSubmit() {
    if (this.id) {
      this.relatoriosService.atualizar(this.relatorio).subscribe(
        response => {
          this.success = true;
          this.relatorio = new Relatorio('', 0, 0, false, 0, 0, 0, 0, 0, '');
        },
        error => {
          this.errors = 'Erro ao atualizar relatorio';
        }
      );
    } else {
      this.relatoriosService.salvar(this.relatorio).subscribe(
        response => {
          this.success = true;
          this.relatorio = new Relatorio('', 0, 0, false, 0, 0, 0, 0, 0, '');
        },
        error => {
          this.errors = error.error.error;
        }
      );
    }
  }

  selecionarMes() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    const previousMonth = (this.currentDate.getMonth() + 1);
    this.selectedMonth = previousMonth;
    this.relatorio.mes = this.selectedMonth;
  }

  selecionarAno() {
    const currentYear = this.currentDate.getFullYear();
    const yearsToDisplay = 5;
    for (let i = currentYear - yearsToDisplay; i <= currentYear + yearsToDisplay; i++) {
      this.yearsRange.push(i);
    }
    this.selectedYear = currentYear;
    this.relatorio.ano = this.selectedYear;
  }

  carregarPublicadores() {
    this.publicadoresService.getPublicadores().subscribe(
      (publicadores) => {
        this.publicadores = publicadores;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}


