import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import { Search } from './Search';

export default {
  title: 'Components/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = args => <Search {...args} />;

export const Base = Template.bind({});

export const Filled = Template.bind({});
Filled.play = async () => {
  const searchInput = screen.getByRole('textbox', {
    name: /search on kara/i,
  });

  await userEvent.type(searchInput, 'Black Jeans{enter}', {
    delay: 100,
  });
};
