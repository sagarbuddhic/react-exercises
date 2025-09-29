import React from "react";
import { DataProvider } from "./SimpleExercise/Context/DataContext";
import ContextApp from "./SimpleExercise/Context/ContextApp";
import Combined from "./UIComponents/Combined";
import Todo from "./SimpleExercise/Todo";
import HideShow from "./SimpleExercise/HideShow";
import InputForm from "./SimpleExercise/InputForm";
import ThemeToggle from "./SimpleExercise/ThemeToggle";
import Counter from "./SimpleExercise/Counter";
import MouseTrackerWrapper from "./SimpleExercise/RenderProps";
import RenderPropsCustom from "./SimpleExercise/RenderPropsCustomHooks";
import StateReducerPattern from "./SimpleExercise/StateReducerPattern";

function App() {
  return (
    <DataProvider>
      {/* <ContextApp />
      <Todo />
      <Combined />
      <HideShow />
      <InputForm></InputForm>
      <ThemeToggle></ThemeToggle>
      <Counter />
      <MouseTrackerWrapper />
      <RenderPropsCustom /> */}
      <StateReducerPattern />
    </DataProvider>
  );
}

export default App;
