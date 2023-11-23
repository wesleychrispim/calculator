
import TypeSelector from '../components/TypeSelector';


// TypeSelector.stories.tsx
import React from 'react';


export default {
  title: 'Components/TypeSelector',
  component: TypeSelector,
};

export const Default = () => <TypeSelector value="Composto" onChange={(e) => console.log(e.target.value)} />; // Coloque um valor de exemplo e uma função de mudança de exemplo.
