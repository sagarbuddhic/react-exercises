import { css } from "@emotion/react";

const dropdown = (hover) => css`
  overflow-y: hidden;
  overflow-x: auto;
  background-color: white;
  margin-top: 5px;
  position: absolute;
  z-index: 999;
  max-height: ${hover ? "500px" : "0px"};
  -webkit-transition: max-height 1s;
  -moz-transition: max-height 1s;
  -ms-transition: max-height 1s;
  -o-transition: max-height 1s;
  transition: max-height 1s;
`;

const preWrapper = css`
  white-space: pre-wrap;
  // font-family: ui-monospace;
  margin: 0;
  padding: 0;
  background-color: transparent;
`;

export { dropdown, preWrapper };
