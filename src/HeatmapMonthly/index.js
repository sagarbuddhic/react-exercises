import React, { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import { IoMdClose } from "react-icons/io";
import ReactTooltip from "react-tooltip";

/** @jsxImportSource @emotion/react */
import * as styles from "./index.style.js";

const HeatmapMonthly = (props) => {
  const [coords, setCoords] = useState({ left: 0, top: 0 });
  const refHeatmap = React.useRef(null);
  const [clickedVals, setClickedVals] = useState({
    coords: { left: 0, top: 0 },
    date: "",
    open: false,
  });
  const [arr, setArr] = useState([]);

  return (
    <div
      ref={refHeatmap}
      style={{
        backgroundColor: "rgb(255, 255, 255)",
        border: "0px solid rgba(0, 0, 0, 0.125)",
        borderRadius: "0.3rem",
        boxShadow: "rgb(0 0 0 / 5%) 0px 0.5rem 1rem",
        padding: "15px",
        maxWidth: "420px",
        minWidth: "350px",
        height: "350px",
      }}
    >
      <span style={{ fontSize: "16px", fontWeight: "600" }}>Activities</span>
      <CalendarHeatmap
        startDate={new Date("2024-01-01")}
        endDate={new Date("2024-04-01")}
        values={[
          { date: "2024-01-05", count: 1 },
          { date: "2024-01-22", count: 2 },
          { date: "2024-02-30", count: 5 },
        ]}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          if (value.count > 4) {
            return `color-github-4`;
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          let date = new Date(value.date).toDateString();
          if (!value || !value.date) {
            return {
              "data-tip": `No Activity.`,
            };
          } else {
            return {
              "data-tip": `${date}. Total ${value.count} activities.`,
            };
          }
        }}
        showWeekdayLabels={true}
        onClick={(val) => {
          let dateTemp = Date.parse(val?.date);
          let date = "";
          if (isNaN(dateTemp) === false) {
            date = new Date(dateTemp).toDateString();
          }

          let { offsetTop, offsetLeft } = refHeatmap.current;

          setClickedVals({
            coords: { left: offsetLeft, top: offsetTop },
            date: date,
            open: true,
          });

          let activitiesTemp = val.activities;
          activitiesTemp =
            activitiesTemp?.length > 5
              ? activitiesTemp.slice(0, 5)
              : activitiesTemp;
          setArr(activitiesTemp);
        }}
        onMouseOver={(event, value) => {
          setCoords({
            left: event.pageX - window.screenX,
            top: event.pageY - window.scrollY,
          });
        }}
      />
      {/* <ReactTooltip /> */}
      <div
        css={styles.dropdown(clickedVals.open)}
        style={{
          // overflowY: "hidden",
          width: "fit-content",
          overflowWrap: "anywhere",
          position: "absolute",
          top: `${clickedVals.coords.top}px`,
          left: `${clickedVals.coords.left}px`,
          zIndex: "9999",
          maxWidth: "500px",
        }}
      >
        <div
          style={{
            marginTop: "5px",
            borderRadius: "1%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{ marginTop: "3px", marginRight: "13px", alignSelf: "end" }}
          >
            <Tooltip
              title={<span style={{ fontSize: "12px" }}>Close</span>}
              placement="top"
              arrow
            >
              <div style={{ width: "25px" }}>
                <IconButton
                  style={{
                    backgroundColor: "rgb(37, 47, 62)",
                    alignSelf: "start",
                    margin: "0px 5px 10px 0px",
                    cursor: "pointer",
                  }}
                  color="default"
                  size="small"
                  onClick={() => {
                    setClickedVals({
                      coords: clickedVals.coords,
                      date: clickedVals.date,
                      open: false,
                    });
                  }}
                >
                  <IoMdClose style={{ fontSize: "1.4rem", color: "white" }} />
                </IconButton>
              </div>
            </Tooltip>
          </div>
          <span>Activities on ${clickedVals.date}</span>
        </div>
      </div>
    </div>
  );
};

export default HeatmapMonthly;
