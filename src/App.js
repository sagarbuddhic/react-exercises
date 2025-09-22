import React from "react";
import { DataProvider } from "./SimpleExercise/DataContext";
import ContextApp from "./SimpleExercise/ContextApp";
import Combined from "./UIComponents/Combined";
import Todo from "./SimpleExercise/Todo";
import HideShow from "./SimpleExercise/HideShow";
import InputForm from "./SimpleExercise/InputForm";
import ThemeToggle from "./SimpleExercise/ThemeToggle";

function App() {
  return (
    <DataProvider>
      <ContextApp />
      <Todo />
      {/* <Combined /> */}
      <HideShow />
      <InputForm></InputForm>
      <ThemeToggle></ThemeToggle>
    </DataProvider>
  );
}

export default App;
