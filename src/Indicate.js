import React from "react";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "./indicate.css";
const Indicate = (props) => {
  const { text } = props;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span className="arrow down"></span>
      <span>
        <h5>
          <strong>{text}</strong>
        </h5>
      </span>
    </div>
  );
};
export default Indicate;
