import { Product } from "@/types/type";
import Image from "next/image";
import React from "react";
import FavoriteButton from "../FavoriteButton";
import { Star } from "iconsax-react";
import Link from "next/link";
import BuyButton from "../BuyButton";

interface SearchCartProps {
  data: Product;
}

const SearchCart = ({ data }: SearchCartProps) => {
  const {
    _id,
    title,
    price,
    rate,
    imagesUrl,
    discount,
    newPrice,
    quantity,
    isFavorite,
  } = data;
  return (
    <div className="col-span-12 overflow-hidden rounded-8 border-2 md:col-span-6 xl:col-span-4">
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={imagesUrl[0]}
          sizes="100vw"
          alt={`تصویر ${_id}`}
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-y-4 p-3">
        <Link href={`/product/${_id}/${title}`} className="h4-bold text-center">
          {title}
        </Link>
        <div className="flex items-center justify-between">
          <FavoriteButton
            foodId={_id}
            otherClasses="w-7 h-7"
            isFavorite={isFavorite}
          />
          {discount > 0 && newPrice && (
            <div className="flex items-center gap-x-2">
              <p className="body-md text-muted-700 line-through">
                {newPrice.toLocaleString("fa")}
              </p>
              <span className="body-sm rounded-4 bg-error-200/20 px-2 py-0.5 text-error-300">
                {discount} %
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Star variant="Bold" className="h-7 w-7 text-warning-200" />
            <p className="font-semibold">{rate.toFixed(1)}</p>
          </div>
          {discount > 0 ? (
            <p className="body-lg">{price.toLocaleString("fa")} تومان</p>
          ) : (
            <p className="body-lg">{(11000).toLocaleString("fa")} تومان</p>
          )}
        </div>
        <BuyButton
          foodId={_id}
          quantity={quantity}
          btnClasses="w-full body-md py-2 rounded-8"
        />
      </div>
    </div>
  );
};

export default SearchCart;
