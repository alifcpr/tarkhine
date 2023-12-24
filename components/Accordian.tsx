"use client";
import { ArrowDown2 } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";

type AccordianProps = {
  containerClasses?: string;
  contentClasses?: string;
  titleClasses?: string;
  titleContainer?: string;
  arrowClasses?: string;
  children: string | React.ReactNode;
  title: string;
  icon?: React.ReactNode;
};

const Accordian = ({
  containerClasses,
  contentClasses,
  titleClasses,
  titleContainer,
  arrowClasses,
  children,
  icon,
  title,
}: AccordianProps) => {
  // states
  const [open, setOpen] = useState<boolean>(false);
  const [contentSize, setContentSize] = useState<number>(0);
  // content ref
  const contentRef = useRef<null | HTMLDivElement>(null);

  // reset contentSize state according to the size of the element
  useEffect(() => {
    if (open) {
      const content: number = Number(contentRef.current?.scrollHeight);
      setContentSize(content);
    }
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center justify-between ${containerClasses}`}
      >
        <div className={`flex items-center justify-between ${titleContainer}`}>
          {icon && icon}
          <span className={titleClasses}>{title}</span>
        </div>
        <ArrowDown2
          className={`smooth-transition h-5 w-5 ${arrowClasses} ${
            open ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <div
        ref={contentRef}
        style={{
          height: `${open ? contentSize : 0}px`,
          overflow: `${open ? "auto" : "hidden"}`,
        }}
        className={`smooth-transition ${contentClasses}`}
      >
        {children}
      </div>
    </>
  );
};

export default Accordian;
