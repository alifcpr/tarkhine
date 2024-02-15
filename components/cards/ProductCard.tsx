"use client";
import { Product } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavoriteButton from "../FavoriteButton";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import BuyButton from "../BuyButton";
import { customeStyles, slug } from "@/utils";

const ProductCard = (
  props: Omit<
    Product,
    | "address"
    | "description"
    | "comments"
    | "rateCount"
    | "subCategory"
    | "category"
  >
) => {
  const {
    _id,
    discount,
    imagesUrl,
    ingredients,
    price,
    quantity,
    rate,
    title,
    isFavorite,
    newPrice,
  } = props;

  return (
    <div className="smooth-transition group col-span-12 grid grid-cols-12 overflow-hidden rounded-8 border-2 md:col-span-6  xl:hover:shadow-lg 2xl:col-span-4">
      <Link
        href={`/product/${_id}`}
        className="relative col-span-4 h-full lg:col-span-4 "
      >
        <Image
          src={imagesUrl[0]}
          className="absolute min-h-full w-full object-cover object-center"
          fill
          alt="image"
        />
      </Link>
      <div className="col-span-8 flex h-full flex-col items-center justify-between p-2 lg:col-span-8 xl:py-4 xl:pe-3 xl:pr-8">
        <div className="flex w-full items-center justify-between">
          <Link
            href={`/product/${_id}/${slug(title)}`}
            title={title}
            className="body-md lg:body-lg xl:h7-semibold"
          >
            {title}
          </Link>
          <div className="smooth-transition opacity-0 group-hover:opacity-100 max-xl:hidden xl:block">
            <FavoriteButton foodId={_id} isFavorite={isFavorite} />
          </div>
          <div className="max-xl:block xl:hidden">
            <Discount price={price} discount={discount} />
          </div>
        </div>
        <div className="my-2 flex h-full w-full items-center justify-between xl:mt-3">
          <p
            title={`مواد اولیه : ${ingredients.toLocaleString()}`}
            className="caption-lg xl:body-md w-1/2 truncate xl:line-clamp-2 xl:w-3/5 xl:whitespace-normal xl:break-words xl:pe-2"
          >
            {ingredients.toLocaleString()}
          </p>
          <div className=" flex w-1/2 flex-col items-end truncate xl:w-2/5 ">
            <div className="max-xl:hidden xl:block">
              <Discount price={price} discount={discount} />
            </div>
            <div
              title={`قیمت : ${discount > 0 ? newPrice : price} تومان`}
              className="caption-lg lg:body-md flex items-center gap-x-1"
            >
              <p>
                {discount > 0 && newPrice
                  ? newPrice.toLocaleString("fa")
                  : price.toLocaleString("fa")}
              </p>
              <span>تومان</span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-x-2 xl:mt-2">
          <FavoriteButton
            foodId={_id}
            isFavorite={isFavorite}
            otherClasses="w-14 h-14 xl:hidden"
          />
          <div className="-scale-x-100">
            <Rating
              value={rate}
              className="h-12"
              readOnly
              itemStyles={customeStyles}
            />
          </div>
          <BuyButton
            quantity={quantity}
            foodId={_id}
            btnClasses="caption-md lg:caption-lg xl:body-md w-full whitespace-nowrap rounded-4 px-1.5 py-2"
          />
        </div>
      </div>
    </div>
  );
};

type DiscountProps = {
  discount: number;
  price: number;
};

const Discount = ({ discount, price }: DiscountProps) => {
  return (
    <>
      {discount > 0 && (
        <div className="flex items-center gap-x-2 ">
          <p className="caption-md lg:caption-lg text-muted-600 line-through">
            {price.toLocaleString("fa")}
          </p>
          <span className="caption-md lg:caption-lg rounded-8 bg-error-100 px-2.5 py-0.5 text-error-300">
            %{discount.toLocaleString("fa")}
          </span>
        </div>
      )}
    </>
  );
};

export default ProductCard;
