// calculation.test.ts
import { calcularJurosCompostos, calcularJurosSimples } from '../src/utils/calculation';

describe('calcularJurosCompostos', () => {
  it('calcula juros compostos corretamente', () => {
    // Valor inicial de 1000, taxa de juros de 0.05 (5%), tempo de 2 anos
    const resultado = calcularJurosCompostos(1000, 0.05, 2);
    expect(resultado).toBeCloseTo(1102.5); // Espera-se que o resultado seja próximo de 1102.5
  });
});

describe('calcularJurosSimples', () => {
  it('calcula juros simples corretamente', () => {
    // Valor inicial de 1000, taxa de juros de 0.05 (5%), tempo de 2 anos
    const resultado = calcularJurosSimples(1000, 0.05, 2);
    expect(resultado).toBe(1100); // Espera-se que o resultado seja exatamente 1100
  });
});
