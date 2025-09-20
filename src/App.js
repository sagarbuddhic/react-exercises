import React from "react";
import { DataProvider } from "./Context/DataContext";
import ContextApp from "./Context/ContextApp";
import Combined from "./UIComponents/Combined";

function App() {
  return (
    <DataProvider>
      <ContextApp />
      {/* <Combined /> */}
    </DataProvider>
  );
}

export default App;
