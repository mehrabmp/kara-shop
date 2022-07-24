import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { lightTheme } from 'styles/Theme';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(lightTheme.colors),
    },
    block: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const BlockButton = Template.bind({});
BlockButton.args = {
  block: true,
};
