// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */

import { css } from "@emotion/react";

export const headerText = css`
  color: white;
  margin: 0 auto;
  padding: 25px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
  display: table;
`;
