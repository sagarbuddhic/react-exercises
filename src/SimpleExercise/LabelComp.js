import React, { useContext } from "react";
import { DataContext } from "./DataContext";

function LabelComp() {
  const { data } = useContext(DataContext);

  return (
    <div>
      <label>{data}</label>
    </div>
  );
}

export default LabelComp;
