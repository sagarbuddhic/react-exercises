import React, { useState, useLayoutEffect, useCallback } from "react";

const useMouse = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return pos;
};

const MousePoints = () => {
  const pos = useMouse();

  return (
    <>
      <p>
        x: {pos.x}, y: {pos.y}
      </p>
    </>
  );
};

export default MousePoints;
