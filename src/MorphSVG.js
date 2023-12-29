// import "./styles.css";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { star, heart, hand, plane, lightning, note } from "./svgPaths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useFlubber } from "./flubber";
import * as stylesW from "./wrapperStyle.style";

const paths = [lightning, hand, plane, heart, note, star, lightning];
const colors = [
  "#00cc88",
  "#0099ff",
  "#8855ff",
  "#ff0055",
  "#ee4444",
  "#ffcc00",
  "#00cc88",
];

const MorphSVG = (props) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(
    progress,
    paths.map((val, index) => index),
    colors
  );
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <div css={stylesW.wrapper}>
      <svg width="400" height="400">
        <g transform="translate(10 10) scale(17 17)">
          <motion.path fill={fill} d={path} />
        </g>
      </svg>
    </div>
  );
};

export default MorphSVG;
