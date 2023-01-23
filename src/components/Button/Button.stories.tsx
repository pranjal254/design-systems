import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {action} from ""
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Atom/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const VariantButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
VariantButton.args = {
  label: "Button!",
  variant: "primary",
};

export const SizeButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SizeButton.args = {
  label: "Secondary Button!",
  variant: "primary",
  size:"md"
};