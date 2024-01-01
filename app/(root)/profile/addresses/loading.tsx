"use client";
import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Oval
        width={40}
        height={40}
        wrapperClass={"text-white"}
        strokeWidthSecondary={10}
        strokeWidth={5}
        color={"#000"}
        secondaryColor={"#000"}
      />
    </div>
  );
};

export default Loading;
