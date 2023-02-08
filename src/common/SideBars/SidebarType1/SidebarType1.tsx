import React from "react";
import "./SidebarType1.scss";

interface NavItem {
  title: string;
  path: string;
  icon: React.FC<{}>;
  iconSize?: string | number;
  iconColor?: string;
  onClick: () => void;
}

interface SidebarProps {
  navItems: NavItem[];
  height: string;
}

const SidebarType1: React.FC<SidebarProps> = ({ navItems, height }) => {
  return (
    <div className="sidebarWrapper" style={{ height: height }}>
      {navItems.map((navItem) => (
        <li key={navItem.title} className="listWrapper">
          <navItem.icon size={navItem.iconSize} color={navItem.iconColor} />
        </li>
      ))}
    </div>
  );
};

export default SidebarType1;
