"use client";
import { getProductByIdApi } from "@/services/product.services";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import BreadCrumb, { BreadCrumbItem } from "../BreadCrumb";
import { Rating } from "@smastrom/react-rating";
import { customeStyles } from "@/utils";
import "@smastrom/react-rating/style.css";
import ProductSlider from "../ProductSlider";
import IngredientsSection from "./IngredientsSection";
import DescriptionSection from "./DescriptionSection";
import CommentsSection from "./CommentsSection";
import BuyButton from "../BuyButton";
import { v4 as uuidv4 } from "uuid";
import FavoriteButton from "../FavoriteButton";

type ProductDetailProps = {
  foodId: string;
};
const ProductDetail = ({ foodId }: ProductDetailProps) => {
  const { data } = useQuery({
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
      price,
      quantity,
      rate,
      subCategory,
      title,
      newPrice,
      isFavorite,
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
      <div className="relative grid grid-cols-12 gap-4 px-4 xl:px-14 2xl:px-28">
        <div className="col-span-12 rounded-8 bg-muted-200 p-2">
          <BreadCrumb>
            {breadCrumbData.map((item: any) => (
              <BreadCrumbItem
                key={uuidv4()}
                href={item.href}
                active={!!item.active}
              >
                {item.title}
              </BreadCrumbItem>
            ))}
          </BreadCrumb>
        </div>
        <div className="col-span-12 rounded-8  lg:col-span-9 xl:col-span-8">
          <div className="rounded-8 bg-muted-200 p-2">
            <div className="flex items-center justify-between">
              <h1 className="body-lg md:body-xl xl:h4-bold">{title}</h1>
              <div className="flex -scale-x-100 items-center gap-x-2">
                <Rating
                  value={rate}
                  itemStyles={customeStyles}
                  readOnly
                  className="!w-32 md:!w-36"
                />
                <FavoriteButton
                  foodId={_id}
                  isFavorite={isFavorite}
                  otherClasses="w-5 h-5 md:w-6 md:h-6"
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
          <div className="mt-4 rounded-8 bg-muted-200 p-2">
            <CommentsSection comments={comments} foodId={_id} />
          </div>
        </div>
        <div className="col-span-12 md:w-full lg:col-span-3 xl:col-span-4">
          <div className="fixed bottom-0 left-0 z-[9999]  w-full bg-muted-200 p-2 lg:sticky lg:left-0 lg:top-3 lg:rounded-4 lg:p-2">
            <div
              className={`flex items-center lg:mb-2 lg:flex-col xl:flex-row ${
                newPrice ? "justify-between" : "justify-center"
              }`}
            >
              <div className="flex items-center gap-x-1">
                <h1 className="body-md md:body-lg 2xl:h4-bold">
                  {newPrice
                    ? newPrice.toLocaleString("fa")
                    : price.toLocaleString("fa")}
                </h1>
                <p className="body-md 2xl:h6-bold">تومان</p>
              </div>
              {discount > 0 && (
                <div className="flex items-center gap-x-1">
                  <h1 className="body-md md:body-lg 2xl:h4-bold line-through opacity-75">
                    {price.toLocaleString("fa")}
                  </h1>
                  <p className="body-md 2xl:h6-bold opacity-75">تومان</p>
                  <span className="body-md rounded-8 bg-error-100 px-2 text-error-200">
                    {discount} %
                  </span>
                </div>
              )}
            </div>
            <BuyButton
              foodId={_id}
              quantity={quantity}
              btnClasses="w-full p-1 rounded-4 body-md"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
