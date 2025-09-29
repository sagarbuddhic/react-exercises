import React, { useState, useEffect } from "react";

function useRenderProps() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return pos;
}

export default function RenderPropsCustom() {
  const { x, y } = useRenderProps();

  return (
    <div style={{ height: "100vh", background: "#f4f4f4" }}>
      <h1>Mouse Tracker 🖱️</h1>
      <p>
        X: {x}, Y: {y}
      </p>
    </div>
  );
}
