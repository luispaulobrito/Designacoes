import { Component } from '@angular/core';
import { MesesOptions } from 'src/app/enum/meses.enum';

@Component({
  selector: 'app-relatorios-form',
  templateUrl: './relatorios-form.component.html',
  styleUrls: ['./relatorios-form.component.css']
})
export class RelatoriosFormComponent {

  meses = MesesOptions;
  selectedMonth: string = '';
  selectedYear: number = 0;
  yearsRange: number[] = [];

  onSubmit(){}

  ngOnInit(): void{
    this.selecionarMes();
    this.selecionarAno();
  }
  
  selecionarMes(){
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);
    const previousMonth = (currentDate.getMonth() + 1).toString(); 
    this.selectedMonth = previousMonth;
  }

  selecionarAno(){
    const currentYear = new Date().getFullYear();
    const yearsToDisplay = 5;
    for (let i = currentYear - yearsToDisplay; i <= currentYear + yearsToDisplay; i++) {
      this.yearsRange.push(i);
    }
    this.selectedYear = currentYear;
  }


}
