import { Injectable } from '@nestjs/common';
import { CreateDeductibleDto } from './interfaces/create-deductible.dto';
import { DeduciblePayload } from './interfaces/deductible-payload.dto';
import {
  cantidadTalleresRegEx,
  copagoRegex,
  deducibleRegex,
  marcaRegex,
  tallerRegex,
  tipoTallerRegex
} from '../commons/utils';

@Injectable()
export class DeductibleService {
  create(deductible: CreateDeductibleDto): Array<DeduciblePayload> {
    const text = deductible.text.toLocaleLowerCase();

    const deducibles: any = [];
    const deducibleMatch = text.match(deducibleRegex);
    const copagoMatch = text.match(copagoRegex);
    const tallerMatch = text.match(tallerRegex);
    const tipoTallerMatch = text.match(tipoTallerRegex);
    const cantidadTalleres = text.match(cantidadTalleresRegEx);

    let marcaMatch;

    while (
      deducibleMatch !== null &&
      deducibleMatch.length > 0 &&
      copagoMatch !== null &&
      copagoMatch.length > 0 &&
      cantidadTalleres !== null &&
      cantidadTalleres.length > 0 &&
      tallerMatch !== null &&
      tallerMatch.length > 0
    ) {
      marcaMatch = text.match(marcaRegex);
      const deduciblePercentage = deducibleMatch[0].trim().match(/(\d+%|\d.+%)/gi);
      const deducible = deduciblePercentage ? Number(deduciblePercentage[0].trim().split('%')[0]) : 0;

      const copago = Number(copagoMatch[0].match(/[0-9999.99]{1,6}/)?.[0]);
      const moneda = copagoMatch[0].match(/[A-Z]{1,3}/)?.[0] == 'us' || 'us$' ? 'USD' : 'PEN';

      const tipo =
        tipoTallerMatch && tipoTallerMatch[0]
          ? tipoTallerMatch[0].split('talleres afiliados')[1]
            ? tipoTallerMatch[0].split('talleres afiliados')[1].trim() != ''
              ? tipoTallerMatch[0].split('talleres afiliados')[1].trim()
              : 'NO TIPO'
            : 'NO TIPO'
          : 'NO TIPO';

      const marca =
        marcaMatch && marcaMatch.length > 0 && marcaMatch[1] != 'multimarca'
          ? marcaMatch[1].trim().split('multimarca')
          : 'NO MARCA';

      const taller =
        (tallerMatch[0] && tallerMatch[0].includes('afiliados')) || tallerMatch[0].includes('otros')
          ? 'NO TALLER'
          : tallerMatch[0].split('talleres').length > 0
            ? tallerMatch[0].split('talleres')[1].trim()
            : 'NO TALLER';

      const deducibleInfo: DeduciblePayload = {
        deducible,
        copago,
        moneda,
        tipo,
        marca,
        taller
      };
      deducibles.push(deducibleInfo);
      deducibleMatch.shift();
      copagoMatch.shift();
      tipoTallerMatch?.shift();
      tallerMatch.shift();
    }

    return deducibles;
  }
}
