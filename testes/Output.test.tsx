
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 

import Output from '../src/components/Output';

describe('Output Component', () => {
  it('renders with the correct value', () => {
    const testValue = 42;
    render(<Output value={testValue} />);
  
    
    const strongElement = screen.getByText('Resultado:') as HTMLElement;
    const valueElement = screen.getByText(testValue.toString()) as HTMLElement;
  
    
    const containerDiv = screen.getByTestId('output-container') as HTMLElement;

    
    expect(containerDiv).toContainElement(strongElement);
    expect(containerDiv).toContainElement(valueElement);
  });
});
