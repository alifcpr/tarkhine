"use client";
import { foodFilterList } from "@/constants";
import { formUrlQuery, removeUrlQuery } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

type FoodFilterProps = {
  activeClasses?: string;
  buttonClasses?: string;
};

const FoodFilter = ({ activeClasses, buttonClasses }: FoodFilterProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("mainCategory");

  const setFilterHandler = (value: string) => {
    return () => {
      // remove query
      if (query === value) {
        const newUrl = removeUrlQuery({
          key: "mainCategory",
          params: pathName,
        });
        router.push(newUrl, { scroll: false });
      }
      //  add query
      else {
        const newUrl = formUrlQuery({
          key: "mainCategory",
          value,
          params: pathName,
        });
        router.push(newUrl, { scroll: false });
      }
    };
  };

  return (
    <div className="flex items-center">
      {foodFilterList.map((item: string, index: number) => (
        <button
          onClick={setFilterHandler(item)}
          key={index}
          className={`${buttonClasses} ${item === query && activeClasses}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FoodFilter;
