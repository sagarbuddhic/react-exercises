// App.js
import React from "react";
import InputButton from "../Context/InputButton";
import LabelComp from "./LabelComp";
import SelectInput from "../SelectInput";

const vals = ["dog", "cat", "mouse"];

function ContextApp() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>React Context Example</h2>
      <InputButton />
      <LabelComp />
      <SelectInput animals={vals} />
    </div>
  );
}

export default ContextApp;

{
  /* <ContextApp />
      <Todo />
      <Combined />
      <HideShow />
      <InputForm></InputForm>
      <ThemeToggle></ThemeToggle>
      <Counter />
      <MouseTrackerWrapper />
      <StateReducerPattern />
      <RenderPropsCustom />  */
}

// import ContextApp from "./SimpleExercise/Context/ContextApp";
// import Combined from "./UIComponents/Combined";
// import Todo from "./SimpleExercise/Todo";
// import HideShow from "./SimpleExercise/HideShow";
// import InputForm from "./SimpleExercise/InputForm";
// import ThemeToggle from "./SimpleExercise/ThemeToggle";
// import Counter from "./SimpleExercise/Counter";
// import MouseTrackerWrapper from "./SimpleExercise/RenderProps";
// import RenderPropsCustom from "./SimpleExercise/RenderPropsCustomHooks";
// import StateReducerPattern from "./SimpleExercise/StateReducerPattern";
// import { DataProvider } from "./SimpleExercise/Context/DataContext";
