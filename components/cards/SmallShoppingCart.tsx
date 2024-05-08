import { ShoppingCart } from "@/types/type";
import { Add, Minus } from "iconsax-react";
import Link from "next/link";
import React from "react";
import DeleteShoppingCartBtn from "../DeleteShoppingCartBtn";
import {
  decreaseShoppingCartApi,
  deleteShoppingCartApi,
  increaseShoppingCartApi,
} from "@/services/shopping_cart-services";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

interface SmallShoppingCartProps {
  data: {
    foodDetail: ShoppingCart;
    quantity: number;
  };
}

const SmallShoppingCart = ({ data }: SmallShoppingCartProps) => {
  const {
    foodDetail: { title, price, _id, newPrice, discount },
    quantity,
  } = data;

  // handle delete product from shopping cart api
  const queryClient = useQueryClient();
  const { mutate: deleteShoppingCartMutate, isLoading: isDeleteLoading } =
    useMutation({
      mutationKey: ["carts"],
      mutationFn: async (id: string) => await deleteShoppingCartApi(id),
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["carts"] });
        queryClient.invalidateQueries({ queryKey: ["cart-quantity"] });
        toast.success(data.message);
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
      queryClient.invalidateQueries({ queryKey: ["cart-quantity"] });
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
      queryClient.invalidateQueries({ queryKey: ["cart-quantity"] });
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

  // call decrease product api when onClick on button
  const handleDecreaseProduct = () => {
    decProductMutate(_id);
  };

  // call delete product from shopping cart api when onClikc on button
  const handleDeleteProduct = () => {
    deleteShoppingCartMutate(_id);
  };

  return (
    <div
      dir="rtl"
      className="relative flex items-center justify-between overflow-hidden rounded-4 px-2 py-1 odd:bg-muted-200 even:bg-muted-400"
    >
      {(isDeleteLoading || isIncLoading || isDecLoading) && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted-950/50 backdrop-blur-sm">
          <ThreeDots color="#fff" height={10} />
        </div>
      )}
      <div className="flex flex-col justify-between">
        <Link href={`/product/${_id}/${title}`} className="body-sm md:body-md">
          {title}
        </Link>
        {discount > 0 && newPrice ? (
          <div className="body-sm flex items-center gap-x-2">
            <p className="text-muted-600 line-through">
              {price.toLocaleString("fa")}
            </p>
            <p>{newPrice.toLocaleString("fa")} تومان</p>
          </div>
        ) : (
          <p className="body-sm">{price.toLocaleString("fa")} تومان</p>
        )}
      </div>
      <div>
        <div className="flex items-center gap-x-2 rounded-4  bg-primary-200 p-1 text-primary-800">
          <button onClick={handleIncreaseProduct}>
            <Add className="h-5 w-5" />
          </button>
          <p className="body-sm">{quantity}</p>
          {quantity > 1 ? (
            <button onClick={handleDecreaseProduct}>
              <Minus className="h-5 w-5" />
            </button>
          ) : (
            <button>
              <DeleteShoppingCartBtn
                deleteFunc={handleDeleteProduct}
                title={title}
                iconClassName="w-4 h-3.5"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallShoppingCart;
