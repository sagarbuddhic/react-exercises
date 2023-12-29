import React from "react";
import tableObj from "./tableObj";
import Table from "./Table";

const TableChart = () => {
  let options = tableObj;
  return <Table {...options} />;
};

export default TableChart;
