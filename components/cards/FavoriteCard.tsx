import { Product } from "@/types/type";
import Image from "next/image";
import React from "react";
import FavoriteButton from "../FavoriteButton";
import { Rating } from "@smastrom/react-rating";
import { customeStyles } from "@/utils";
import Link from "next/link";
import "@smastrom/react-rating/style.css";
import BuyButton from "../BuyButton";

type FavoriteCardProps = {
  data: Pick<
    Product,
    "imagesUrl" | "title" | "_id" | "isFavorite" | "rate" | "quantity" | "price"
  >;
};

const FavoriteCard = ({ data }: FavoriteCardProps) => {
  const { imagesUrl, title, _id, isFavorite, rate, quantity, price } = data;

  return (
    <div className="col-span-6 overflow-hidden rounded-8 border-2 lg:col-span-4 2xl:col-span-3">
      <div className="relative h-32 w-full md:h-40 xl:h-44 2xl:h-52">
        <Image
          src={imagesUrl[0]}
          alt={title}
          fill
          sizes="100vw"
          className="absolute"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <Link
            title={title}
            href={`/product/${_id}`}
            className="caption-lg md:body-md"
          >
            {title}
          </Link>
          <FavoriteButton
            foodId={_id}
            isFavorite={isFavorite}
            otherClasses="w-5 h-5 md:w-7 md:h-7"
          />
        </div>
        <div className="flex items-center justify-between gap-x-1 md:my-5">
          <div className="-scale-x-100">
            <Rating
              value={rate}
              readOnly
              className="!h-12 md:!h-5 2xl:!h-6"
              itemStyles={customeStyles}
            />
          </div>
          <div className="caption-lg md:body-md flex items-center gap-x-1">
            <p>{price.toLocaleString("fa")}</p>
            <span>تومان</span>
          </div>
        </div>
        <BuyButton
          foodId={_id}
          quantity={quantity}
          btnClasses="w-full p-1 caption-lg rounded-4 md:body-md "
        />
      </div>
    </div>
  );
};

export default FavoriteCard;
