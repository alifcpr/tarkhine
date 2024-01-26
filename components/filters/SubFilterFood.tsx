"use client";
import { subFilterList } from "@/constants";
import { formUrlQuery, removeUrlQuery } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef } from "react";

const SubFilterFood = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const filterBtnRef = useRef<HTMLButtonElement | null>(null);
  const searchParams = useSearchParams();
  const mainCategoryQuery = searchParams.get("mainCategory");
  const subCategoryQuery = searchParams.get("subCategory");

  const router = useRouter();
  const subFilters = subFilterList.find(
    (item) => item.key === mainCategoryQuery
  );

  const setFilterHandler = (value: string) => {
    return () => {
      if (value === subCategoryQuery) {
        const newUrl = removeUrlQuery({
          key: "subCategory",
          params: searchParams.toString(),
        });
        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = formUrlQuery({
          key: "subCategory",
          params: searchParams.toString(),
          value,
        });
        router.push(newUrl, { scroll: false });
      }
    };
  };

  return (
    <div
      ref={containerRef}
      className="hideSB relative flex w-full gap-x-3 overflow-hidden overflow-x-auto "
    >
      {subFilters?.filters.map((item, index: number) => (
        <button
          onClick={setFilterHandler(item)}
          className={`caption-lg md:body-md whitespace-nowrap rounded-24 bg-muted-400 px-2 py-1 ${
            subCategoryQuery === item && "bg-muted-500 text-muted-950"
          }`}
          key={index}
          ref={filterBtnRef}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SubFilterFood;
