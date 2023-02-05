import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TestComponent from "./TestComponent";

export default {
  title: "Components/Module/TestComponent",
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

const Template: ComponentStory<typeof TestComponent> = (args) => (
  <TestComponent {...args}/>
);

export const VariantTest = Template.bind({});

VariantTest.args = {
    testProp: "Create Segment",
  };


