import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import dropDownIcon from "../../Assets/drop_down.png";

const DropDownIcon = (props) => {
  const {
    value,
    handleChange,
    dropdownList = ["First", "Second"],
    isDisable = false,
    inputProps,
  } = props;

  return (
    <div style={{ padding: "15px" }} class="select-input-icon-wrapper">
      <FormControl
        style={{
          width: "100%",
          marginLeft: "0px",
          backgroundColor: "transparent",
          border: "none",
        }}
        variant="outlined"
      >
        <Select
          inputProps={inputProps}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            getContentAnchorEl: null,
          }}
          //   className={`cust-options ${classes.root}`}
          className={`cust-options`}
          style={{ border: "none" }}
          value={value}
          onChange={handleChange}
          disabled={isDisable}
          renderValue={(value) => {
            return (
              <div
                style={{
                  width: "23px",
                  height: "23px",
                  filter:
                    "invert(40%) sepia(15%) saturate(15%) hue-rotate(87deg) brightness(91%) contrast(94%)",
                  zIndex: "10",
                }}
              >
                <img
                  src={dropDownIcon}
                  style={{ width: "100%", height: "100%" }}
                  alt="Select"
                />
              </div>
            );
          }}
        >
          {dropdownList.length > 0 ? (
            dropdownList.map((item) => (
              <MenuItem className={"cust-options"} value={item} key={item}>
                {item}
              </MenuItem>
            ))
          ) : (
            <MenuItem className={"cust-options"} disabled={true} key={-1}>
              No option to select
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownIcon;
