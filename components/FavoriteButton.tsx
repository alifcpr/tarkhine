"use client";
import useUser from "@/hooks/useUser";
import {
  addToFavoriteApi,
  deleteFromFavoriteApi,
} from "@/services/user.services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Heart } from "iconsax-react";
import React from "react";
import toast from "react-hot-toast";

type FavoriteButtonProps = {
  foodId: string;
  isFavorite: boolean;
  otherClasses?: string;
};

const FavoriteButton = ({
  foodId,
  isFavorite,
  otherClasses,
}: FavoriteButtonProps) => {
  const { status } = useUser();

  const queryClient = useQueryClient();
  // add to favorite api mutation
  const { mutate: addToFavoriteMutate, isLoading: isAdding } = useMutation({
    mutationKey: ["foods"],
    mutationFn: async (id: string) => addToFavoriteApi(id),
    onSuccess: () => {
      toast.success("به لیست غذای های مورد علاقه شما اضافه شد", {
        id: "toast-loading",
      });
      queryClient.invalidateQueries({ queryKey: ["foods"] });
    },
    onError: () => {
      toast.error("به لیست غذای مورد علاقه ی شما اضافه نشد", {
        id: "toast-loading",
      });
    },
  });

  // delete from favorite api mutation
  const { mutate: deleteFromFavoriteMutate, isLoading: isDeleting } =
    useMutation({
      mutationKey: ["foods"],
      mutationFn: async (id: string) => deleteFromFavoriteApi(id),
      onSuccess: () => {
        toast.success("از لیست غذا های شما مورد علاقه شما حذف شد", {
          id: "toast-loading",
        });
        queryClient.invalidateQueries({ queryKey: ["foods"] });
      },
      onError: () => {
        toast.error("از لیست غذا های مورد علاقه شما حذف نشد", {
          id: "toast-loading",
        });
      },
    });

  const favoriteAction = (id: string) => {
    return () => {
      if (status !== "authorize") {
        toast.error("ابتدا وارد حساب کاربری خود شوید");
        return;
      }
      toast.loading("کمی صبر کنید", { id: "toast-loading" });
      if (isFavorite) {
        deleteFromFavoriteMutate(id);
        console.log("func delete run shod");
      } else {
        addToFavoriteMutate(id);
        console.log("func add run shod");
      }
    };
  };

  return (
    <Heart
      onClick={favoriteAction(foodId)}
      className={`smooth-transition cursor-pointer  hover:text-error-200 ${otherClasses} ${
        isFavorite ? "text-error-200" : "text-muted-800"
      } ${
        isDeleting || isAdding ? "pointer-events-none" : "pointer-events-auto"
      }`}
      variant={`${isFavorite ? "Bold" : "Outline"}`}
    />
  );
};

export default FavoriteButton;
