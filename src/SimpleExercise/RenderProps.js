import React, { useState } from "react";

const MouseTracker = ({ children }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      {children(pos)}
    </div>
  );
};

const MouseTrackerWrapper = () => {
  return (
    <MouseTracker>
      {({ x, y }) => (
        <h1>
          Mouse at {x}, {y}
        </h1>
      )}
    </MouseTracker>
  );
};

export default MouseTrackerWrapper;
