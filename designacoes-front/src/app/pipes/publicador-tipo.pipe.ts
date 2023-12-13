  import { Pipe, PipeTransform } from '@angular/core';
  import { PublicadorTipoEnum, PublicadorTipoEnumMapper } from '../enum/publicador-tipo.enum';

  @Pipe({
    name: 'publicadorTipo'
  })
  export class PublicadorTipoPipe implements PipeTransform {

    transform(value: string): string {
      return PublicadorTipoEnumMapper[value as PublicadorTipoEnum];
    }
  }
