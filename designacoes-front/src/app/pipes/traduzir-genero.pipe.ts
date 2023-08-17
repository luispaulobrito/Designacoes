import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traduzirGenero'
})
export class TraduzirGeneroPipe implements PipeTransform {

  transform(valor: string): string {
    return valor === 'M'? 'Masculino':'Feminino';
  }

}
