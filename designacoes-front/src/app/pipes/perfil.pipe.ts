import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perfil'
})
export class PerfilPipe implements PipeTransform {

  transform(value: string): string {
      switch (value) {
        case 'AN':
          return 'Ancião';
        case 'SM':
          return 'Servo Ministerial';
        case 'NP':
          return ' ';
        default:
          return value;
      }
    }
  }
