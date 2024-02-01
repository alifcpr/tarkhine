"use client";
import React, { useState } from "react";
import { Oval } from "react-loader-spinner";

type BuyButtonProps = {
  quantity: number;
  btnClasses?: string;
  foodId: string;
};

const BuyButton = ({ quantity, btnClasses, foodId }: BuyButtonProps) => {
  const [isLoaidng] = useState<boolean>(false);

  return quantity > 0 ? (
    <button
      className={`button-primary flex items-center justify-center ${
        isLoaidng && "pointer-events-none opacity-80"
      } ${btnClasses}`}
    >
      {isLoaidng ? (
        <Oval
          width={23}
          height={23}
          wrapperClass={"text-white"}
          strokeWidthSecondary={10}
          strokeWidth={5}
          color={"#fff"}
          secondaryColor={"#fff"}
        />
      ) : (
        "افزودن به سبد خرید"
      )}
    </button>
  ) : (
    <button
      className={`button-primary pointer-events-none opacity-70 ${btnClasses}`}
    >
      اتمام موجودی
    </button>
  );
};

export default BuyButton;
