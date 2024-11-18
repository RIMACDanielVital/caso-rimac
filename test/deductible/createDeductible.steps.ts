import { defineFeature, loadFeature } from 'jest-cucumber';
import { DeductibleService } from './../../src/deductible/deductible.service';
const feature = loadFeature('./createDeductible.feature', { loadRelativePath: true, errors: true });

defineFeature(feature, test => {
  test('Póliza con deducible texto plano', ({ given, when, then }) => {
    let input: { payload: { text: string } };
    let response;
    given(/^la poliza tiene un deducible en forma del (.*)$/, (texto: string) => {
      console.log(texto);
      input = require(`./input/${texto}.json`);
    });

    when('ejecutamos el conversor de deducible', () => {
      const DeductibleServiceMock = new DeductibleService();
      response = DeductibleServiceMock.create(input.payload);
    });

    then(/^obtenemos la parametrización del deducible en (.*)$/, async (detalle: string) => {
      const expectedOutput = require(`./output/${detalle}.json`);
      expect(response).toEqual(expectedOutput);
    });
  });
});
