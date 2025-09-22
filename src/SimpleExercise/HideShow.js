import React, { useState } from "react";

export default function HideShow() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <label>text</label>}
    </>
  );
}
