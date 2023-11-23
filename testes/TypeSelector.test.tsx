
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TypeSelector from '../src/components/TypeSelector';

describe('TypeSelector', () => {
  it('renders correctly and handles onChange', () => {
  
    const onChangeMock = jest.fn();

   
    render(<TypeSelector value="Composto" onChange={onChangeMock} />);

   
    const compostButton = screen.getByText('Composto');
    const simpleButton = screen.getByText('Simples');

    expect(compostButton).toBeInTheDocument();
    expect(simpleButton).toBeInTheDocument();

  
    expect(compostButton).toHaveStyle('background-color: gray');
    expect(simpleButton).not.toHaveStyle('background-color: gray');

    
    fireEvent.click(simpleButton);

    
    expect(onChangeMock).toHaveBeenCalledWith({
      target: { value: 'Simples' },
    } as React.ChangeEvent<HTMLInputElement>); 

  });
});
