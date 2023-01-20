import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LandingPageSSO from "./LandingPageSSO";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Module/LoginSSO",
  component: LandingPageSSO,
} as ComponentMeta<typeof LandingPageSSO>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LandingPageSSO> = (args) => (
  <LandingPageSSO {...args} />
);

export const LoginPageSSO = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoginPageSSO.args = {
  projectName: "Atom.Ai",
};
