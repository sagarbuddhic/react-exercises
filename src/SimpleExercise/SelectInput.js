import React, { useState, useCallback } from "react";

const SelectInput = ({ animals }) => {
  const [selected, setSelected] = useState("");

  const handleChange = useCallback((e) => {
    setSelected(e.target.value);
    console.log("Selected:", e.target.value);
  }, []);

  return (
    <>
      <label htmlFor="animal-select">Choose an animal:</label>
      <select id="animal-select" value={selected} onChange={handleChange}>
        <option value="" disabled>
          Select an Animal
        </option>
        {animals.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>

      {selected && <p>You selected: {selected}</p>}
    </>
  );
};

export default SelectInput;
