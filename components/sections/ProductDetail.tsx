"use client";
import { getProductByIdApi } from "@/services/product.services";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import BreadCrumb, { BreadCrumbItem } from "../BreadCrumb";
import { Rating } from "@smastrom/react-rating";
import { customeStyles } from "@/utils";
import "@smastrom/react-rating/style.css";
import ProductSlider from "../ProductSlider";
import Ingredients from "./IngredientsSection";
import IngredientsSection from "./IngredientsSection";
import DescriptionSection from "./DescriptionSection";

type ProductDetailProps = {
  foodId: string;
};
const ProductDetail = ({ foodId }: ProductDetailProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => await getProductByIdApi(foodId),
  });

  if (data) {
    const {
      _id,
      category,
      comments,
      description,
      discount,
      imagesUrl,
      ingredients,
      isFavorite,
      price,
      quantity,
      rate,
      rateCount,
      subCategory,
      title,
      newPrice,
    } = data.data;

    const breadCrumbData = [
      { title: "خانه", href: "/", active: false },
      { title: "منوی رستوران", href: "/menu", active: false },
      {
        title: category[0],
        href: `/menu?mainCategory=${category[0]}`,
        active: false,
      },
      {
        title: subCategory[0],
        href: `/menu?mainCategory=${category[0]}&subCategory=${subCategory[0]}`,
        active: false,
      },
      {
        title,
        href: `/menu?mainCategory=${category[0]}&subCategory=${subCategory[0]}`,
        active: true,
      },
    ];

    return (
      <div className="relative grid grid-cols-12 gap-x-4 px-4 xl:px-14 2xl:px-28">
        <div className="col-span-12 rounded-8  lg:col-span-9 xl:col-span-8">
          <div>
            <BreadCrumb>
              {breadCrumbData.map((item) => (
                <BreadCrumbItem
                  key={item.href}
                  href={item.href}
                  active={!!item.active}
                >
                  {item.title}
                </BreadCrumbItem>
              ))}
            </BreadCrumb>
          </div>
          <div className="mt-4 rounded-8 bg-muted-200 p-2">
            <div className="flex items-center justify-between">
              <h1 className="body-lg md:body-xl xl:h4-bold">{title}</h1>
              <div className="-scale-x-100">
                <Rating
                  value={rate}
                  itemStyles={customeStyles}
                  readOnly
                  className="!w-32 md:!w-36"
                />
              </div>
            </div>
            <div className="mt-5">
              <ProductSlider images={imagesUrl} />
            </div>
          </div>
          <div className="mt-4 rounded-8 bg-muted-200 p-2">
            <IngredientsSection list={ingredients} />
          </div>
          <div className="mt-4 rounded-8 bg-muted-200 p-2">
            <DescriptionSection description={description} />
          </div>
        </div>

        <div className="col-span-12 hidden bg-muted-200 md:block md:w-full lg:col-span-3 xl:col-span-4"></div>
      </div>
    );
  }
};

export default ProductDetail;
