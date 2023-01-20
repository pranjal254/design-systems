import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";


export default {
  title: "Components/Atom/Input",
  component: Input,
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const VariantInput = Template.bind({});

VariantInput.args = {
  type: "text",
  placeholder: "User Name",
  size:'sm',
  label:'needed for checkbox or radio'
};

