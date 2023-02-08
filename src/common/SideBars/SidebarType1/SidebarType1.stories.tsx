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
    iconSize: 25,
    iconColor: '#0000008a'
  },
  {
    title: "Profile",
    path: "#",
    icon: FaUser,
    iconSize: 25,
    iconColor: '#0000008a'
  },
  {
    title: "Settings",
    path: "#",
    icon: FaCog,
    iconSize: 25,
    iconColor: '#0000008a'
  },
];

export const Sidebar = Template.bind({});
Sidebar.args = {
  navItems: navItems,
  height:'97vh'
};
