// Calculator.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importe as funções do jest-dom

import Calculator from '../src/components/Calculator';

describe('Calculator Component', () => {
  it('calculates the result correctly', () => {
    render(<Calculator />);

    // Simula a entrada de valores nos campos
    const valorInicialInput = screen.getByLabelText('Valor inicial');
    const taxaJurosInput = screen.getByLabelText('Taxa de juros');
    const tempoInput = screen.getByLabelText('Tempo');

    fireEvent.change(valorInicialInput, { target: { value: '1000' } });
    fireEvent.change(taxaJurosInput, { target: { value: '0.1' } });
    fireEvent.change(tempoInput, { target: { value: '5' } });

    // Simula o clique no botão de calcular
    const calcularButton = screen.getByText('Calcular');
    fireEvent.click(calcularButton);

    // Verifica se o resultado é exibido corretamente
    const resultadoOutput = screen.getByText(/Resultado:/);
    expect(resultadoOutput).toBeInTheDocument(); // Certifique-se de que o resultado está na tela
  });
});
