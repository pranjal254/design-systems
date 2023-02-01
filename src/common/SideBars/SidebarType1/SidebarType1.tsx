import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import "./SidebarType1.scss";

interface NavItem {
  title: string;
  path: string;
  icon: React.FC<{ size?: string | number }>;
  onClick: () => void;
}

interface SidebarProps {
  navItems: NavItem[];
}

const SidebarType1: React.FC<SidebarProps> = ({ navItems }) => {
  return (
    <div className="sidebarWrapper">
      {navItems.map((navItem) => (
        <li key={navItem.title} className="listWrapper">
          <navItem.icon size={30} />
        </li>
      ))}
    </div>
  );
};

export default SidebarType1;
