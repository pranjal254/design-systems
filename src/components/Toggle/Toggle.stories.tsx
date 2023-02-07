import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toggle from "./Toggle";

export default {
  title: "Components/Atom/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => (
  <Toggle {...args} />
);

export const ToggleTemplate = Template.bind({});
ToggleTemplate.args = {
  isChecked: true,
  disabled:false,
  size:'sm',
};
