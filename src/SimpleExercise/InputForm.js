import React, { useState } from "react";

export default function InputForm() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <p>{text || "Stranger"}</p>
    </>
  );
}
