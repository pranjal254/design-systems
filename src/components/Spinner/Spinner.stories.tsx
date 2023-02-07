import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./Spinner";

export default {
  title: "Components/Atom/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const SpinnerTemplate = Template.bind({});
SpinnerTemplate.args = {
  size:'sm',
  label: 'Spinning....'
};
