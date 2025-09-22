// App.js
import React from "react";
import InputButton from "./InputButton";
import LabelComp from "./LabelComp";
import SelectInput from "./SelectInput";
import Counter from "./Counter";

const vals = ["dog", "cat", "mouse"];

function ContextApp() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>React Context Example</h2>
      <InputButton />
      <LabelComp />
      <SelectInput animals={vals} />
      <Counter />
    </div>
  );
}

export default ContextApp;
