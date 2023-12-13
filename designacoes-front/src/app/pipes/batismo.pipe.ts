import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'batismo'
})
export class BatismoPipe implements PipeTransform {

  transform(valor: boolean): string {
    return valor == true? 'Sim': 'Não';
  }

}
