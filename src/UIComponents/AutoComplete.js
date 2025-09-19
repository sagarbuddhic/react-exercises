/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { AutoComplete } from "primereact/autocomplete";
import { useRef } from "react";
import { useState } from "react";
import * as stylesW from "../wrapperStyle.style";

const AutoCompleteText = () => {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const refAnimals = useRef(null);

  let allAnimalsTemp = [
    { name: "Tiger", code: "tg" },
    { name: "Lion", code: "ln" },
    { name: "Leopard", code: "ld" },
    { name: "Elephant", code: "et" },
    { name: "Cheetah", code: "ch" },
    { name: "panda", code: "pd" },
  ];
  const searchAnimals = (event) => {
    setTimeout(() => {
      let filteredAnimals;
      if (!event.query.trim().length) {
        filteredAnimals = [];
      } else {
        filteredAnimals = allAnimalsTemp.filter((exp) => {
          return exp.name.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }

      setFilteredAnimals(filteredAnimals);
    }, 100);
  };

  return (
    <div css={stylesW.wrapper}>
      <div className="card flex justify-content-center">
        <AutoComplete
          ref={refAnimals}
          value={selectedAnimal}
          placeholder="Enter Animal"
          suggestions={filteredAnimals}
          completeMethod={searchAnimals}
          aria-label="Expressions"
          dropdownAriaLabel="Enter Animals"
          style={{
            margin: "5px 5px 5px 0",
            width: "100%",
            fontSize: "16px !important",
            height: "35px",
          }}
          size="35"
          field="name"
          onChange={(e) => {
            setSelectedAnimal(e.value);
          }}
          onFocus={(e) => {
            if (!selectedAnimal) {
              refAnimals.current.search(e, "", "dropdown");
            }
          }}
          onClear={(e) => refAnimals.current.search(e, "", "dropdown")}
        />
      </div>
    </div>
  );
};

export default AutoCompleteText;
