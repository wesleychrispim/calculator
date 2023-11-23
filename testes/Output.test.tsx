// Output.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importe as funções do jest-dom

import Output from '../src/components/Output';

describe('Output Component', () => {
  it('renders with the correct value', () => {
    const testValue = 42;
    render(<Output value={testValue} />);
  
    // Encontrar os elementos strong e p
    const strongElement = screen.getByText('Resultado:') as HTMLElement;
    const valueElement = screen.getByText(testValue.toString()) as HTMLElement;
  
    // Encontrar a div que contém os elementos
    const containerDiv = screen.getByTestId('output-container') as HTMLElement;

    // Verificar se os elementos estão dentro da mesma div
    expect(containerDiv).toContainElement(strongElement);
    expect(containerDiv).toContainElement(valueElement);
  });
});
