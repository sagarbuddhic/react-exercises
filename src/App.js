import React from "react";
import { DataProvider } from "./Context/DataContext";
import ContextApp from "./Context/ContextApp";

function App() {
  return (
    <DataProvider>
      <ContextApp />
    </DataProvider>
  );
}

export default App;
