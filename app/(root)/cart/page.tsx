"use client";

import StepBar from "@/components/StepBar";
import { shoppingCartStepList } from "@/constants";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="mx-auto h-[700px] max-w-sm px-4 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl xl:px-14 2xl:px-28">
      <div className="mx-auto flex justify-center md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl">
        <StepBar activeStep={step}>
          {shoppingCartStepList.map(({ text, Icon }, index: number) => (
            <StepBar.Step
              key={uuidv4()}
              index={index + 1}
              active={step >= index + 1}
              icon={<Icon className="h-7 w-7" />}
              onClick={() => setStep(index + 1)}
            >
              <StepBar.Text>{text}</StepBar.Text>
            </StepBar.Step>
          ))}
        </StepBar>
      </div>
      =
    </div>
  );
};

export default Page;
