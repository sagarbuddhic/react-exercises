/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import BreadCrumbs from "./index";
import { ImDatabase } from "react-icons/im";
import HomeIcon from "@mui/icons-material/Home";
import { BsTable } from "react-icons/bs";
import * as styleW from "../wrapperStyle.style";

const BreadCrumbsWrapper = () => {
  return (
    <div css={styleW.wrapper}>
      <BreadCrumbs
        breadcrumbs={[
          { label: "Home", icon: <HomeIcon /> },
          { label: "Database", icon: <ImDatabase /> },
          { label: "Table", icon: <BsTable /> },
        ]}
      />
    </div>
  );
};

export default BreadCrumbsWrapper;
