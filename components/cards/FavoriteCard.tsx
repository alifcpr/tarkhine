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
  data: Product;
};

const FavoriteCard = ({ data }: FavoriteCardProps) => {
  return (
    <div className="col-span-6 overflow-hidden rounded-8 border-2 lg:col-span-4 2xl:col-span-3">
      <div className="relative h-32 w-full md:h-40 xl:h-44 2xl:h-52">
        <Image
          src={data.imagesUrl[0]}
          alt={data.title}
          fill
          sizes="100vw"
          className="absolute"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <Link
            title={data.title}
            href={`/product/${data._id}`}
            className="caption-lg md:body-md"
          >
            {data.title}
          </Link>
          <FavoriteButton
            foodId={data._id}
            isFavorite={data.isFavorite}
            otherClasses="w-5 h-5 md:w-7 md:h-7"
          />
        </div>
        <div className="flex items-center justify-between gap-x-1 md:my-5">
          <div className="-scale-x-100">
            <Rating
              value={data.rate}
              readOnly
              className="!h-12 md:!h-6 2xl:!w-1/3"
              itemStyles={customeStyles}
            />
          </div>
          <div className="caption-lg md:body-md flex items-center gap-x-1">
            <p>{data.price.toLocaleString("fa")}</p>
            <span>تومان</span>
          </div>
        </div>
        <BuyButton
          foodId={data._id}
          quantity={data.quantity}
          btnClasses="w-full p-1 caption-lg rounded-4 mt-2 md:body-md "
        />
      </div>
    </div>
  );
};

export default FavoriteCard;
