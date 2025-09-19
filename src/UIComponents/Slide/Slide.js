import React, { useState } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import "./Slide.css";
import * as styleW from "../../wrapperStyle.style";

const Slide = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div css={styleW.wrapper}>
      <div style={{ display: "flex", flexDirection: "column", margin: "15px" }}>
        <span
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          style={{ marginBottom: "10px", cursor: "pointer" }}
        >
          Hover Me!
        </span>
        <div
          className="animals-list"
          style={{
            maxHeight: hovered ? "500px" : "0px",
            position: "absolute",
            zIndex: "999",
            overflowY: "hidden",
            overflowX: "auto",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              width: "fit-content",
            }}
          >
            <span>tiger</span>
            <span>lion</span>
            <span>pigeon</span>
            <span>parrot</span>
            <span>tiger</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
