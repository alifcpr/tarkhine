"use client";
import { ReactNode } from "react";

type DropDownItemProps = {
  children: ReactNode;
};

const DropDownItem = ({ children }: DropDownItemProps) => {
  return (
    <li className="body-md w-full cursor-pointer whitespace-nowrap border-b p-2 last:border-none hover:bg-primary-100">
      {children}
    </li>
  );
};

type DropDownProps = {
  children: ReactNode;
  containerClasses?: string;
};

const DropDown = ({ children, containerClasses }: DropDownProps) => {
  return (
    <div className={`absolute left-0 top-8 z-[9] w-fit ${containerClasses}`}>
      <ul className={`mt-4 overflow-hidden rounded-8 bg-muted-100 shadow-md`}>
        {children}
      </ul>
    </div>
  );
};

DropDown.Item = DropDownItem;

export default DropDown;
