"use client";
import { addProductToShoppingCartApi } from "@/services/shopping_cart-services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";

type BuyButtonProps = {
  quantity: number;
  btnClasses?: string;
  foodId: string;
};

const BuyButton = ({ quantity, btnClasses, foodId }: BuyButtonProps) => {
  const queryClient = useQueryClient();
  const { mutate: addProductToShoppingCartMutate, isLoading: isAddingLoading } =
    useMutation({
      mutationKey: ["foods"],
      mutationFn: async (foodId: string) => addProductToShoppingCartApi(foodId),
      onSuccess: () => {
        toast.success("محصول مدنظر با موفقیت به سبد خرید شما اضافه شد");
        queryClient.invalidateQueries({ queryKey: ["carts"] });
        queryClient.invalidateQueries({ queryKey: ["cart-quantity"] });
      },
      onError: () => {
        toast.error(
          "محصول مدنظر به سبد خرید شما اضافه نشد ، مجددا امتحان کنید"
        );
      },
    });

  const handleAddProduct = () => {
    addProductToShoppingCartMutate(foodId);
  };

  return quantity > 0 ? (
    <button
      onClick={handleAddProduct}
      className={`button-primary flex items-center justify-center ${
        isAddingLoading && "pointer-events-none opacity-80"
      } ${btnClasses}`}
    >
      {isAddingLoading ? (
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
