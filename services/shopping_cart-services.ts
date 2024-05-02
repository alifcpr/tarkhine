import { CommonResponse, ShoppingCartList } from "@/types/type";
import axiosService from "./axios";

export const addProductToShoppingCartApi = async (foodId: string) => {
  const { data } = await axiosService.post<CommonResponse>("/v1/cart/add", {
    foodId,
  });
  return data;
};

export const getAllShopptingCartsApi = async () => {
  const { data } = await axiosService.get<ShoppingCartList>("/v1/cart");
  return data;
};

export const deleteShoppingCartApi = async (foodId: string) => {
  const { data } = await axiosService.delete<CommonResponse>(
    "/v1/cart/remove",
    { data: { foodId } }
  );
  return data;
};
