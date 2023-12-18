import { CategoryItems } from "@/types/type.d";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ _id, href, pitcture, title }: CategoryItems) => {
  return (
    <Link
      href={href}
      className="group relative col-span-6  h-24 rounded-8 border-2 border-primary-800 hover:shadow-lg md:h-28 lg:col-span-3 lg:h-44"
    >
      <Image
        className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-4 object-cover group-hover:drop-shadow-md md:h-36 md:w-36 lg:h-44 lg:w-44 xl:h-52 xl:w-52"
        src={pitcture}
        alt={title}
        width={200}
        height={200}
      />
      <h1 className="caption-lg md:body-lg  absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-8 bg-primary-800 px-5 py-1 text-muted-100 md:px-7 md:py-2 lg:px-8 lg:py-2 xl:px-9 xl:py-3">
        {title}
      </h1>
    </Link>
  );
};

export default CategoryCard;
