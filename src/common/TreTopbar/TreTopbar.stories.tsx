import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TreTopbar from "./TreTopbar";

export default {
  title: "Components/Module/Topbar",
  component: TreTopbar,
} as ComponentMeta<typeof TreTopbar>;

const Template: ComponentStory<typeof TreTopbar> = (args) => (
  <TreTopbar {...args} />
);

export const TopBarPage = Template.bind({});
TopBarPage.args = {
  userName: "Pranjal Gaikwad",
};
