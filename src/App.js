import Users from "./Users";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as styles from "./App.style";
import ErrorBoundary from "./Error-boundary";

function uploadFile(event) {
  let file = event.target.files[0];
  console.log(file);

  if (file) {
    let data = new FormData();
    console.log(data);
    data.append("file", file);
    // axios.post('/files', data)...
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Users />
        <div>
          <label for="file-input">
            <img src="/logo512.png" />
          </label>
          <input
            id="file-input"
            type="file"
            name="myFile"
            onChange={uploadFile}
          />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
