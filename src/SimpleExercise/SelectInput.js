import React, { useState } from "react";

export default function SelectInput({ animals }) {
  const [selAn, setSelAn] = useState("");

  return (
    <>
      <select
        value={selAn}
        onChange={(e) => {
          setSelAn(e.target.value);
        }}
      >
        <option value="" disabled>
          select an animal
        </option>
        {animals.map((an, ind) => (
          <option value={an} key={ind}>
            {an}
          </option>
        ))}
      </select>
      <label>{selAn}</label>
    </>
  );
}
