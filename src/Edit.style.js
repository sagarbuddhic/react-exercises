// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */

import { css } from "@emotion/react";

export const form = css`
  display: grid;
  grid-gap: 20px;
`;
