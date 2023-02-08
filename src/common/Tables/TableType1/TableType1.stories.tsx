import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TableType1 from "./TableType1";

export default {
  title: "Components/Module/Table/TableType1",
  component: TableType1,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof TableType1>;

const Template: ComponentStory<typeof TableType1> = (args) => (
  <TableType1 {...args} />
);

export const TableMUI = Template.bind({});
TableMUI.args = {
  title: "Segment List",
};
