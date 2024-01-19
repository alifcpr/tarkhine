import { agencyAdvantageList } from "@/constants";
import React from "react";

const AgencyAdvantages = () => {
  return (
    <div className="mx-auto border-b-2 py-4 md:py-14">
      <h1 className="body-lg md:h4-bold text-center">مزیت دریافت نمایندگی</h1>
      <div className="mx-auto mt-4 flex list-inside flex-col flex-wrap gap-y-2 md:mt-4 md:flex-row md:justify-center xl:max-w-6xl">
        {agencyAdvantageList.map((item: any, index: number) => (
          <li
            key={index}
            className="caption-lg md:body-md xl:body-xl flex justify-center gap-x-2 md:w-1/2"
          >
            <span className="relative  text-center before:top-2 before:hidden  md:w-full md:text-center md:before:absolute md:before:right-2 md:before:block md:before:h-4 md:before:w-4 md:before:rotate-45 md:before:rounded-4 md:before:border-2 md:before:border-primary-800 xl:before:right-16">
              {item.text}
            </span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default AgencyAdvantages;
