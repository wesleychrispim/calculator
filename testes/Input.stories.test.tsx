// Input.test.tsx
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../src/components/Input';

describe('Input Component', () => {
  it('generates unique IDs for each input', () => {
    render(
      <>
        <Input label="First Input" placeholder="Placeholder" onChange={() => {}} />
        <Input label="Second Input" placeholder="Placeholder" onChange={() => {}} />
      </>
    );

    const firstInput = screen.getByLabelText('First Input');
    const secondInput = screen.getByLabelText('Second Input');

    expect(firstInput).toBeInTheDocument();
    expect(secondInput).toBeInTheDocument();
    expect(firstInput.id).not.toEqual(secondInput.id);
  });
});
