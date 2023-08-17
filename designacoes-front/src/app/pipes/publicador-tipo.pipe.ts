import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publicadorTipo'
})
export class PublicadorTipoPipe implements PipeTransform {

  transform(value: string): string {
      switch (value) {
        case 'PB':
          return 'Publicador';
        case 'PA':
          return 'Pioneiro Auxiliar';
        case 'PI':
          return 'Pioneiro Auxiliar Indeterminado';
        case 'PR':
          return 'Pioneiro Regular';
        default:
          return value;
      }
    }
  }
