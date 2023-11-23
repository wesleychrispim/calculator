// Output.stories.tsx
import React from 'react';
import Output from '../components/Output';

export default {
  title: 'Components/Output',
  component: Output,
};

export const Default = () => <Output value={123.45} />; // Coloque um valor de exemplo que você deseja exibir no Storybook.
