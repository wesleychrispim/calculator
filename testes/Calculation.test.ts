
import { calcularJurosCompostos, calcularJurosSimples } from '../src/utils/calculation';

describe('calcularJurosCompostos', () => {
  it('calcula juros compostos corretamente', () => {
    
    const resultado = calcularJurosCompostos(1000, 0.05, 2);
    expect(resultado).toBeCloseTo(1102.5); 
  });
});

describe('calcularJurosSimples', () => {
  it('calcula juros simples corretamente', () => {
    
    const resultado = calcularJurosSimples(1000, 0.05, 2);
    expect(resultado).toBe(1100); 
  });
});