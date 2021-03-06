import React, { useState } from "react";
import "./DataTable.css";
import TableRow from "../TableRow/TableRow";
import TableColumn from "../TableColumn/TableColumn";

const DataTable = ({ albumList, columns }) => {
  const [toggleAlign, setToggleAlign] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
  const [clearSelection, setClearSelection] = useState(false);

  const uncheckedRow = () => setAllSelected(false);

  const onAllSelectionChange = (e) => {
    setAllSelected(e.target.checked);
    setClearSelection(e.target.checked);
  };

  const changeAlign = () => setToggleAlign(!toggleAlign);

  return (
    <table>
      <TableColumn
        columns={columns}
        onAllSelectionChange={onAllSelectionChange}
        changeAlign={changeAlign}
        selected={allSelected}
      />
      <tbody>
        {albumList.map((item) => {
          return (
            <TableRow
              key={item.id}
              item={item}
              toggleAlign={toggleAlign}
              allSelected={allSelected}
              uncheckedRow={uncheckedRow}
              clearSelection={clearSelection}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
