import React, { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        minHeight: "100vh",
        textAlign: "center",
        padding: "2rem",
        transition: "all 0.3s ease",
      }}
    >
      <button onClick={toggleTheme} aria-pressed={isDark}>
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
