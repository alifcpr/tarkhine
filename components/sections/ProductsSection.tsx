"use client";
import { getAllProductApi } from "@/services/product.services";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";
import ProductCard from "../cards/ProductCard";
import Pagination from "../Pagination";
import NotFound from "../NotFound";

const ProductsSection = () => {
  const searchParams = useSearchParams();

  const mainQuery = searchParams.get("mainCategory") ?? "";
  const subQuery = searchParams.get("subCategory") ?? "";
  const limitQuery = searchParams.get("limit") ?? 10;
  const pageQuery = searchParams.get("page") ?? 1;
  const searchQuery = searchParams.get("q") ?? "";

  const { data } = useQuery({
    queryKey: [
      "foods",
      mainQuery,
      subQuery,
      limitQuery,
      pageQuery,
      searchQuery,
    ],
    queryFn: async () =>
      await getAllProductApi({
        main: mainQuery,
        sub: subQuery,
        limit: +limitQuery,
        page: +pageQuery,
        q: searchQuery,
      }),
  });

  if (data)
    return (
      <div className="px-5 lg:px-11 xl:px-14">
        {data.foods.length > 0 ? (
          data.foods.map((item) => (
            <div key={item.subCategory} className="mb-3">
              <h1 className="h4-bold lg:h4-bold mb-3">{item.subCategory}</h1>
              <div className="grid grid-cols-12 gap-6">
                {item.data.map((product) => (
                  <ProductCard {...product} key={product._id} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="mb-12">
            <NotFound title="مورد با این مشخصات پیدا نکردیم " />
          </div>
        )}

        <div className="">
          <Pagination totalPage={data.maxPage} />
        </div>
      </div>
    );
};

export default ProductsSection;
