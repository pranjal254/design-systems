import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Atom/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const CheckboxTemplate = Template.bind({});
CheckboxTemplate.args = {
  label: "This is test",
  isChecked: true,
  disabled:false
};
