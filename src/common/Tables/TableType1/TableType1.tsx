import { forwardRef } from "react";
import React, { useState } from "react";
import MaterialTable from "material-table";
import { Column } from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

interface Emp {
  name: string;
  type: string;
  description: string;
  createDate: string;
  createdBy: string;
}
interface TableProps {
  title: string;
}

const empList: Emp[] = [
  {
    name: "Highly Engaged Campaign with high Conversion",
    type: "Campaign Success",
    description: "Highly Engaged Campaign with high Conversion",
    createDate: "12/6/2022",
    createdBy: "Surya SS",
  },
  {
    name: "Highly Engaged Campaign with low Conversion",
    type: "Campaign Success",
    description: "Highly Engaged Campaign with low Conversion",
    createDate: "12/6/2022",
    createdBy: "Surya SS",
  },
  {
    name: "Moderately Engaged",
    type: "Campaign Success",
    description: "Moderately Engaged",
    createDate: "12/6/2022",
    createdBy: "Surya SS",
  },
  {
    name: "Low engaged",
    type: "Campaign Success",
    description: "Low engaged",
    createDate: "12/6/2022",
    createdBy: "Surya SS",
  },
  {
    name: "Last 6 Months Email Engagement",
    type: "Campaign Success",
    description: "New conversion made through email campaigns",
    createDate: "12/6/2022",
    createdBy: "Surya SS",
  },
];

const TableType1: React.FC = (  ) => {
  const [data, setData] = useState<Emp[]>(empList);
  const columns: Column<Emp>[] = [
    { title: "Name", field: "name", editable: "never" },
    { title: "Type", field: "type" },
    { title: "Description", field: "description" },
    { title: "Create Date", field: "createDate" },
    { title: "Created By", field: "createdBy" },
  ];

  return (
    <MaterialTable
      title="Segment List"
      data={data}
      columns={columns}
      icons={tableIcons}
      editable={{
        onRowAdd: (newRow) =>
          new Promise((resolve, reject) => {
            const updatedRows = [
              ...data,
              { id: Math.floor(Math.random() * 100), ...newRow },
            ];
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 2000);
          }),
        onRowDelete: (selectedRow) =>
          new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data];
            updatedRows.splice(index, 1);
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 2000);
          }),
        onRowUpdate: (updatedRow, oldRow) =>
          new Promise((resolve, reject) => {
            const index = oldRow.tableData.id;
            const updatedRows = [...data];
            updatedRows[index] = updatedRow;
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 2000);
          }),
      }}
      options={{
        actionsColumnIndex: -1,
        addRowPosition: "first",
      }}
    />
  );
};

export default TableType1;
