import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopBar } from './TopBar';

export default {
  title: 'Navigation/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = () => <TopBar />;

export const Base = Template.bind({});
