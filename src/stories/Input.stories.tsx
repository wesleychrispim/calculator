import React from 'react';
import { Story, Meta } from '@storybook/react';
import Input, { InputProps } from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args as InputProps} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Valor Inicial',
  placeholder: 'R$1000',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Taxa de Juros',
  placeholder: '0.1',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tempo',
  placeholder: '5 anos',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value),
};
