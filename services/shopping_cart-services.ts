import { CommonResponse } from "@/types/type";
import axiosService from "./axios";

export const addProductToShoppingCartApi = async (foodId: string) => {
  const { data } = await axiosService.post<CommonResponse>("/v1/cart/add", {
    foodId,
  });
  return data;
};
