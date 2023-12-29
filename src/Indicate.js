import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "./indicate.css";
import * as stylesW from "./wrapperStyle.style";

const Indicate = (props) => {
  const { text } = props;
  return (
    <div css={stylesW.wrapper}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span className="arrow down"></span>
        <span>
          <h5>
            <strong>{text}</strong>
          </h5>
        </span>
      </div>
    </div>
  );
};
export default Indicate;
