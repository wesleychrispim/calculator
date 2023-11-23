// TypeSelector.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TypeSelector from '../src/components/TypeSelector';

describe('TypeSelector', () => {
  it('renders correctly and handles onChange', () => {
    // Mock the onChange function
    const onChangeMock = jest.fn();

    // Render the TypeSelector with initial value 'Composto'
    render(<TypeSelector value="Composto" onChange={onChangeMock} />);

    // Check if the buttons and labels are rendered correctly
    const compostButton = screen.getByText('Composto');
    const simpleButton = screen.getByText('Simples');

    expect(compostButton).toBeInTheDocument();
    expect(simpleButton).toBeInTheDocument();

    // Check if the initial value is set correctly
    expect(compostButton).toHaveStyle('background-color: gray');
    expect(simpleButton).not.toHaveStyle('background-color: gray');

    // Click on the "Simples" button
    fireEvent.click(simpleButton);

    // Check if the onChange function is called with the correct value
    expect(onChangeMock).toHaveBeenCalledWith({
      target: { value: 'Simples' },
    } as React.ChangeEvent<HTMLInputElement>); // Corrigir o tipo do evento aqui

  });
});
