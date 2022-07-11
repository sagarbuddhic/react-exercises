import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./App.style";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="users" element={<Users />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
