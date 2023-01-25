import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "";
import TreSelect from "./TreSelect";

const options = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AS", label: "American Samoa" },
  { value: "BL", label: "Belgium" },
];
export default {
  title: "Components/Atom/Select",
  component: TreSelect,
} as ComponentMeta<typeof TreSelect>;

const Template: ComponentStory<typeof TreSelect> = (args) => <TreSelect {...args} />;

export const VariantSelect = Template.bind({});

VariantSelect.args = {
  isClearable: true,
  options: options,
  isMulti:true
};
