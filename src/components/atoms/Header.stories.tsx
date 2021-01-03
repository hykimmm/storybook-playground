import React from 'react';
import Header from './Header';
import {withKnobs, text} from '@storybook/addon-knobs'

export default {
  component: Header,
  title: 'Header',
  decorators: [withKnobs],
};

export const header = () => {
  const headerText = text('text', 'Hi!');
  const as = text('as', 'h1');
  
  return <Header text={headerText} as={as}/>;
}

header.story = {
  name: 'Default'
};

export const h1 = () => <Header text="Storybook" as="h1" />;
export const h2 = () => <Header text="Storybook" as="h2" />;
