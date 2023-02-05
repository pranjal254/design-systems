import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

import SidebarType1 from "./SidebarType1";

export default {
  title: "Components/Module/Sidebar/SidebarType1",
  component: SidebarType1,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SidebarType1>;

const Template: ComponentStory<typeof SidebarType1> = (args) => (
  <SidebarType1 {...args} />
);
const navItems = [
  {
    title: "Home",
    path: "#",
    icon: FaHome,
  },
  {
    title: "Profile",
    path: "#",
    icon: FaUser,
  },
  {
    title: "Settings",
    path: "#",
    icon: FaCog,
  },
];

export const Sidebar = Template.bind({});
Sidebar.args = {
  navItems: navItems,
  height:'97vh'
};
