"use client";
import { getProductBySearchApi } from "@/services/product.services";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import NotFound from "../NotFound";
import { v4 as uuidv4 } from "uuid";
import SearchCart from "../cards/SearchCart";

interface SearchSectionProps {
  productName: string;
}

const SearchSection = ({ productName }: SearchSectionProps) => {
  const { data } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => await getProductBySearchApi(productName),
  });

  if (data)
    return (
      <div className="mx-auto mb-10 grid max-w-sm grid-cols-12 place-content-center gap-4 px-5 pt-5 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        {data.foods.length > 0 ? (
          data.foods.map((food: any) => (
            <SearchCart data={food} key={uuidv4()} />
          ))
        ) : (
          <div className="col-span-12 my-10">
            <NotFound title="موردی با این مشخصات پیدا نکردیم!" />
          </div>
        )}
      </div>
    );
};

export default SearchSection;
