/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect } from "react";
import * as stylesW from "../../wrapperStyle.style";

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

const FileUpload = (props) => {
  return (
    <div css={stylesW.wrapper}>
      <label for="file-input">
        <img src="/logo512.png" />
      </label>
      <input id="file-input" type="file" name="myFile" onChange={uploadFile} />
    </div>
  );
};

export default FileUpload;
