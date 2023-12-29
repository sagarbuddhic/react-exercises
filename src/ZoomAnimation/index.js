import React from "react";
import { HiLightBulb } from "react-icons/hi";

/** @jsxImportSource @emotion/react */
import * as styles from "./index.style";
import * as stylesW from "../wrapperStyle.style";

const ZoomAnimation = (props) => {
  const {} = props;
  return (
    <div css={stylesW.wrapper}>
      <div css={styles.wrapper}>
        <h5 css={styles.heading}>
          <span>
            <HiLightBulb
              className="sidenav-icon"
              style={{
                color: "darkorange",
                backgroundImage: "linear-gradient(white, yellow)",
              }}
            />
          </span>
          <span>Zoom it</span>
        </h5>
      </div>
    </div>
  );
};

export default ZoomAnimation;
