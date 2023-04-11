import { interpolate } from "flubber";
import { MotionValue, useTransform } from "framer-motion";

function useFlubber(progress, paths) {
  return useTransform(
    progress,
    paths.map((val, i) => i),
    paths,
    {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
    }
  );
}

export { useFlubber };
