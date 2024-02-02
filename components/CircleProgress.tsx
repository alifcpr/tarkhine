import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

type CircleProgressProps = {
  value: number;
  styleClasses?: string;
};

const CircleProgress = ({ value, styleClasses }: CircleProgressProps) => {
  return (
    <CircularProgressbar
      value={value}
      text={`${value} %`}
      strokeWidth={2}
      className={styleClasses}
      styles={{
        text: {
          fill: "#fff",
          fontSize: "15px",
        },
        trail: {
          stroke: "#353535",
        },
        path: {
          stroke: "#FFFFFF",
        },
      }}
    />
  );
};

export default CircleProgress;
