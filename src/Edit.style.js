// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */

import { css } from "@emotion/react";

export const form = css`
  display: grid;
  grid-gap: 20px;
`;

export const table = css`
  .ant-table-content {
    overflow: scroll;
  }

  table {
    table-layout: fixed !important;
    width: 1000px;
  }

  tr > th {
    width: 300px;
  }

  tr > th:first-child {
    position: sticky;
    left: 0;
    z-index: 2;
    background-color: #fafafa;
  }

  tr > td:first-child {
    position: sticky;
    left: 0;
    z-index: 2;
    background-color: #ffffff;
  }

  tr > td {
    width: 300px;
  }
`;
