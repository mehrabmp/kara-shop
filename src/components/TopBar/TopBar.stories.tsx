import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopBar } from './TopBar';

export default {
  title: 'Components/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = args => <TopBar {...args} />;

export const Topbar = Template.bind({});
