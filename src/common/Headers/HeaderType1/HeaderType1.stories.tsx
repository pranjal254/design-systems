import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  HeaderType1 from './HeaderType1';

export default {
  title: 'Components/Module/Header/HeaderType1',
  component: HeaderType1,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof HeaderType1>;

const Template: ComponentStory<typeof HeaderType1> = (args) => <HeaderType1 {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Pranjal Gaikwad',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
