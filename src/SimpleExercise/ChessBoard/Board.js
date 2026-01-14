import React from "react";
import Box from "./Box";
import "./chess.css";

const Chess = (props) => {
  const { count } = props;
  const numbers = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className="chess">
      {numbers.map((rowKey) => {
        return (
          <div key={rowKey} className="row">
            {numbers.map((colKey) => {
              let isBlack = (rowKey + colKey) % 2 === 0;
              return (
                <div
                  className={isBlack ? "col-black" : "col-white"}
                  key={colKey}
                >
                  <Box />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Chess;
