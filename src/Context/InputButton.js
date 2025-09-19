import React, { useState, useContext } from "react";
import { DataContext } from "./DataContext";

function InputButton() {
  const [input, setInput] = useState("");
  const { setData } = useContext(DataContext);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter Something"
      ></input>
      <button
        onClick={() => {
          setInput("");
          setData(input);
        }}
      >
        submit
      </button>
    </div>
  );
}

export default InputButton;
