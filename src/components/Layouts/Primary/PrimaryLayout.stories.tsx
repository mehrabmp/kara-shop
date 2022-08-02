import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryLayout } from './PrimaryLayout';

export default {
  title: 'Layouts/Primary',
  component: PrimaryLayout,
} as ComponentMeta<typeof PrimaryLayout>;

const Template: ComponentStory<typeof PrimaryLayout> = args => (
  <PrimaryLayout {...args} />
);

export const Base = Template.bind({});
Base.args = {
  children: <h1>Components</h1>,
};
