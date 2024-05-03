import { ShoppingCart as TShoppingCart } from "@/types/type";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import ShoppingCart from "@/components/cards/ShoppingCart";

interface ShoppingCartsListProps {
  data: {
    foodDetail: TShoppingCart;
    quantity: number;
  }[];
}

const ShoppingCartsList = ({ data }: ShoppingCartsListProps) => {
  console.log("Shop", data);
  return (
    <div
      dir="ltr"
      className=" flex h-[300px] flex-col gap-y-3 overflow-y-auto rounded-8 border-2 p-4 md:h-[400px] lg:col-span-7 lg:h-[500px]"
    >
      {data.map((cartData: any) => (
        <ShoppingCart data={cartData} key={uuidv4()} />
      ))}
    </div>
  );
};

export default ShoppingCartsList;
