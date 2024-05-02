"use client";
import React, { createContext, useContext } from "react";

interface ContextType {
  activeStep: number;
  lastStep: number;
}
// stepBar context
const StepContext = createContext<ContextType>({ activeStep: 1, lastStep: 1 });

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode;
}

// each stepBar text
const Text = ({ className, children }: TextProps) => {
  return (
    <p
      className={`body-md md:body-lg xl:body-xl hidden whitespace-nowrap md:block  ${className}`}
    >
      {children}
    </p>
  );
};

interface StepProps extends React.HTMLProps<HTMLDivElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
  index: number;
}

// step
const Step = ({
  icon,
  children,
  active = false,
  index,
  className,
  ...props
}: StepProps) => {
  const { lastStep } = useContext(StepContext);

  return (
    <div className={`flex w-full items-center gap-x-1 `}>
      {index !== 1 && (
        <div
          className={`h-[3px] w-full border-t-2 border-dashed  ${
            active && "border-primary-800"
          }`}
        ></div>
      )}
      <div
        {...props}
        className={`flex w-full cursor-pointer items-center justify-center gap-x-1 first:justify-end last:justify-start ${
          active ? " text-primary-800" : " pointer-events-none text-muted-600"
        }`}
      >
        <span>{icon && icon}</span>
        {children}
      </div>
      {lastStep !== index && (
        <div
          className={`h-[3px] w-full border-t-2 border-dashed  ${
            active && "border-primary-800"
          }`}
        ></div>
      )}
    </div>
  );
};

interface StepBarProps {
  children: React.ReactNode;
  activeStep: number;
}

// stepBar container
const StepBar = ({ children, activeStep = 1 }: StepBarProps) => {
  const lastStep = React.Children.toArray(children);

  return (
    <div className={`flex w-full items-center gap-x-1`}>
      <StepContext.Provider value={{ lastStep: lastStep.length, activeStep }}>
        {children}
      </StepContext.Provider>
    </div>
  );
};

StepBar.Step = Step;
StepBar.Text = Text;

export default StepBar;
