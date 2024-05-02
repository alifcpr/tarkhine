"use client";
import React, { useState } from "react";
import { ShoppingCart as TShoppingCart } from "@/types/type";
import Image from "next/image";
import { Add, Minus, Trash } from "iconsax-react";
import Modal from "../shared/Modal";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { customeStyles } from "@/utils";
import Link from "next/link";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  decreaseShoppingCartApi,
  deleteShoppingCartApi,
  increaseShoppingCartApi,
} from "@/services/shopping_cart-services";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

export interface DeleteShoppingCartProps
  extends React.HTMLProps<HTMLButtonElement> {
  title: string;
  className?: string;
  iconClassName?: string;
  deleteFunc: () => void;
}

const DeleteShoppingCart = ({
  title,
  className,
  iconClassName,
  deleteFunc,
}: DeleteShoppingCartProps) => {
  // modal state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDelete = () => {
    setIsOpen(false);
    deleteFunc();
  };

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header
          onClose={() => setIsOpen(false)}
          containerClass="px-3 py-3 !bg-muted-400"
          titleClass="h5-bold text-muted-800"
          iconClass="text-muted-800 w-10 h-10"
        >
          {title}
        </Modal.Header>
        <Modal.Body containerClass="max-w-xs md:max-w-lg">
          <div className="body-md bg-muted-100 px-4 py-3">
            آیا مطمئن هستید که میخواهید این آیتم را از سبد خرید خود حذف کنید ؟
            <div className="mt-4 flex items-center gap-x-4">
              <button
                onClick={handleDelete}
                className="button-primary rounded-4 px-6 py-1"
              >
                بله
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-4 px-6 py-1 text-error-200 hover:bg-error-200/10"
              >
                خیر
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <button
        onClick={() => setIsOpen(true)}
        className={`hover:text-error-200 ${className}`}
      >
        <Trash className={`h-6 w-6 ${iconClassName}`} />
      </button>
    </>
  );
};

interface ShoppnigCartProps {
  data: {
    quantity: number;
    foodDetail: TShoppingCart;
  };
}

const ShoppingCart = ({ data }: ShoppnigCartProps) => {
  // handle delete product from shopping cart api
  const queryClient = useQueryClient();
  const { mutate: deleteShoppingCartMutate, isLoading: isDeleteLoading } =
    useMutation({
      mutationKey: ["carts"],
      mutationFn: async (id: string) => await deleteShoppingCartApi(id),
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["carts"] });
      },
      onError: ({ response }) => {
        toast.error(response.data.message);
      },
    });

  // handle increase product api
  const { mutate: incProductMutate, isLoading: isIncLoading } = useMutation({
    mutationKey: ["carts"],
    mutationFn: async (id: string) => await increaseShoppingCartApi(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
      toast.success(data.message);
    },
    onError: ({ response }) => {
      toast.error(response.data.message);
    },
  });

  // handle decrease product api
  const { mutate: decProductMutate, isLoading: isDecLoading } = useMutation({
    mutationKey: ["carts"],
    mutationFn: async (id: string) => await decreaseShoppingCartApi(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
      toast.success(data.message);
    },
    onError: ({ response }) => {
      toast.error(response.data.message);
    },
  });

  // call increase product api when onCLick on button
  const handleIncreaseProduct = () => {
    incProductMutate(_id);
  };

  //   call decrease product api when onClick on button
  const handleDecreaseProduct = () => {
    decProductMutate(_id);
  };

  const {
    foodDetail: { _id, discount, imagesUrl, price, rate, title, newPrice },
    quantity,
  } = data;

  return (
    <div
      dir="rtl"
      className="relative flex flex-col rounded-4 border-2 md:flex-row"
    >
      {(isDeleteLoading || isDecLoading || isIncLoading) && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <ThreeDots color="#fff" />
        </div>
      )}
      <Link
        href={`/product/${_id}/${title}`}
        className="relative h-40 w-full md:block md:h-36 md:w-48 lg:h-40 lg:w-52"
      >
        <Image
          src={imagesUrl[0]}
          alt={`تصویر ${title}`}
          height={200}
          width={200}
          className="h-full w-full object-cover object-center"
          priority
        />
      </Link>
      <div className="flex w-full flex-col justify-between px-7 py-3">
        <div className="flex items-center justify-between">
          <Link href={`/product/${_id}/${title}`} className="h5-bold">
            {title}
          </Link>
          <DeleteShoppingCart
            title={title}
            deleteFunc={() => deleteShoppingCartMutate(_id)}
            iconClassName="w-6 h-6"
          />
        </div>
        <div className="mt-3">
          <p className="body-md">خمیر ، نون</p>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex w-full items-center justify-between md:justify-normal md:gap-x-3">
            <Rating
              value={rate}
              readOnly
              className="!w-28 -scale-x-100"
              itemStyles={customeStyles}
            />
            <div className="flex gap-x-1 rounded-4 bg-primary-200 p-1 text-primary-900">
              <button onClick={handleIncreaseProduct}>
                <Add className="h-4 w-4" />
              </button>
              <p>{quantity}</p>

              <button
                onClick={handleDecreaseProduct}
                className={`${
                  quantity === 1 && "pointer-events-none opacity-30"
                }`}
              >
                <Minus className="h-4 w-4" />
              </button>
            </div>
          </div>
          {discount > 0 && newPrice ? (
            <div className="mt-2 flex w-full flex-row justify-between md:mt-0 md:flex-col md:items-end">
              <div className="body-md flex items-center  gap-x-2 whitespace-nowrap">
                <p className="text-muted-700 line-through">
                  {price.toLocaleString("fa")}
                </p>
                <span className="rounded-4 bg-error-100 p-0.5 text-error-200">{`${discount} %`}</span>
              </div>
              <div className="body-md flex items-center gap-x-2">
                <p>{newPrice.toLocaleString("fa")}</p>
                <span>تومان</span>
              </div>
            </div>
          ) : (
            <div className="body-md mt-2 flex items-center gap-x-1 md:mt-0">
              <p>{price.toLocaleString("fa")}</p>
              <span>تومان</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
