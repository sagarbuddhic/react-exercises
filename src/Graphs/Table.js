import React, { useState } from "react";
// import {
//   TableBarsUnitColors,
//   TableBarsColors,
//   ConsolidatedBarColors,
//   metricUnitsFormat,
// } from "./utils";
import Tooltip from "@material-ui/core/Tooltip";

const ConsolidatedBarColors = [
  "#7abaff",
  "#FFA502",
  "#2B568C",
  "#C96424",
  "#d9a7a7",
  "#d4c44e",
  "#adadad",
];

// const TableBarsColors = ["#BBA135", "#2B568C", "#C96424", "#00878F", "#9F6434"];
const TableBarsColors = [
  "#7abaff",
  "#FFA502",
  "#2B568C",
  "#C96424",
  "#d9a7a7",
  "#d4c44e",
  "#adadad",
];

const TableBarsUnitColors = { $: "#55C8A9", gb: "#007da3" };
// const TableBarsUnitColors = { $: "#6F927C", gb: "#A36969" };

// const ConsolidatedStacksTitle = [
//   "Execution Time",
//   "Elapsed Time",
//   "Compilation Time",
//   "Overload Time",
//   "Provisioning Time",
// ];

const Table = (props) => {
  const { caption, headings, rows, handleMainTableDataClick } = props;
  console.log("rows", rows);

  return (
    <>
      <span
        style={{
          color: "#333333",
          fontSize: "16px",
          marginBottom: "10px",
          fontFamily: "Roboto",
        }}
      >
        {caption}
      </span>
      <div style={{ overflowX: "scroll" }}>
        {headings && rows && rows?.length > 0 ? (
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              backgroundColor: "#f5f6fa",
              marginTop: "5px",
            }}
          >
            {/* <caption>{caption}</caption> */}
            <thead>
              <tr>
                {headings?.map((val) => {
                  return (
                    <th
                      style={{
                        borderBottom: "1px solid #d6dfef",
                        borderTop: "1px solid #d6dfef",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        paddingLeft: "3px",
                        textAlign: "left",
                        backgroundColor: "#f5f6fa",
                        fontSize: "14px",
                        fontFamily: "Roboto",
                        // color: "#666666",
                      }}
                      scope="col"
                    >
                      {val}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows?.map((row, index) => {
                return (
                  <tr
                    style={{
                      borderBottom: "1px solid #d6dfef",
                      borderRight: "0px",
                    }}
                  >
                    {Object.keys(row).map((rowObjectKey, rowObjectKeyIndex) => {
                      let valText = row[rowObjectKey]?.td?.value;
                      if (row[rowObjectKey]?.type === "text") {
                        return (
                          <td
                            style={{
                              // border: "1px solid #ddd",
                              padding: "3px 3px",
                              fontSize: "11px",
                              width: "120px",
                              fontFamily: "Roboto",
                              cursor: "pointer",
                            }}
                            onClick={(event) => {
                              if (rowObjectKeyIndex === 0) {
                                handleMainTableDataClick({
                                  selectedValue: row[rowObjectKey]?.tooltip,
                                  selectedText: row[rowObjectKey]?.td.value,
                                });
                              }
                            }}
                          >
                            <Tooltip
                              title={
                                <div
                                  style={{
                                    fontSize: "12px",
                                    // backgroundColor: "white",
                                    // color: "black",
                                    padding: "5px",
                                    // boxShadow: "none",
                                  }}
                                >
                                  {row[rowObjectKey]?.tooltip}
                                </div>
                              }
                              placement="top"
                              arrow
                            >
                              <span>{valText?.slice(0, 15)}..</span>
                            </Tooltip>
                          </td>
                        );
                      } else if (row[rowObjectKey]?.type === "percentage") {
                        return (
                          <td
                            style={{
                              // border: "1px solid #ddd",
                              fontSize: "12px",
                              padding: "3px 3px",
                              verticalAlign: "middle",
                              textAlign: "left",
                              width: "220px",
                              fontFamily: "Roboto",
                            }}
                          >
                            <span
                              style={{
                                display: "inline-block",
                                height: "12px",
                                width: "50%",
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  borderRadius: "5%",
                                  height: "12px",
                                  backgroundColor:
                                    TableBarsUnitColors[
                                      row[rowObjectKey]?.unit
                                    ] ||
                                    TableBarsColors[
                                      row[rowObjectKey]?.td?.percentageIndex
                                    ],
                                  width: `${row[rowObjectKey]?.td?.percentage}%`,
                                }}
                              ></span>
                            </span>
                            <span style={{ marginLeft: "3px" }}>
                              {row[rowObjectKey]?.td?.value}
                            </span>
                          </td>
                        );
                      } else if (
                        row[rowObjectKey]?.type === "stacked_percentage"
                      ) {
                        return (
                          <td
                            style={{
                              // border: "1px solid #ddd",
                              fontSize: "12px",
                              padding: "3px 3px",
                              verticalAlign: "middle",
                              textAlign: "left",
                              width: "220px",
                              fontFamily: "Roboto",
                            }}
                          >
                            <Tooltip
                              style={{ boxShadow: "none" }}
                              elevation={0}
                              title={
                                <div
                                  style={{
                                    fontSize: "12px",
                                    backgroundColor: "white",
                                    color: "black",
                                    padding: "10px",
                                    boxShadow: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "3px",
                                  }}
                                >
                                  {row[rowObjectKey]?.td?.percentages.map(
                                    (val, rowObjectKeyIndex) => {
                                      return (
                                        <div
                                          style={{
                                            marginBottom: "5px",
                                          }}
                                        >
                                          <span
                                            style={{
                                              height: "15px",
                                              width: "15px",
                                              backgroundColor:
                                                ConsolidatedBarColors[
                                                  rowObjectKeyIndex
                                                ],
                                              borderRadius: "50%",
                                              display: "inline-block",
                                              marginRight: "5px",
                                              top: "30px",
                                            }}
                                          />
                                          <span style={{ marginRight: "5px" }}>
                                            {
                                              row[rowObjectKey]?.dataTitle[
                                                rowObjectKeyIndex
                                              ]
                                            }
                                            :
                                          </span>
                                          <span>{val?.value}</span>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              }
                              placement="top"
                              arrow
                            >
                              <div>
                                <span
                                  style={{
                                    display: "inline-block",
                                    height: "12px",
                                    width: "55%",
                                  }}
                                >
                                  {row[rowObjectKey]?.td?.percentages.map(
                                    (val, rowObjectKeyIndex) => {
                                      return (
                                        <span
                                          style={{
                                            display: "inline-block",
                                            borderRadius: "5%",
                                            height: "12px",
                                            backgroundColor:
                                              ConsolidatedBarColors[
                                                rowObjectKeyIndex
                                              ],
                                            width: `${val?.percentage}%`,
                                          }}
                                        ></span>
                                      );
                                    }
                                  )}
                                </span>
                                <span style={{ marginLeft: "8px" }}>
                                  {row[rowObjectKey]?.td?.value}
                                </span>
                              </div>
                            </Tooltip>
                          </td>
                        );
                      } else {
                        return (
                          <td
                            style={{
                              border: "1px solid #ddd",
                              padding: "5px",
                            }}
                          >
                            {row[rowObjectKey]?.td?.value}
                          </td>
                        );
                      }
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div
            style={{
              color: "#666666",
              fontSize: "12px",
              fontWeight: "bold",
              fill: "#666666",
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <tspan>No data to display</tspan>
          </div>
        )}
      </div>
    </>
  );
};

export default Table;
