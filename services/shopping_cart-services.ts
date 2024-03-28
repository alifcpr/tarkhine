import axiosService from "./axios";

type Response = {
  message: string;
  statusCode: number;
};
export const addProductToShoppingCartApi = async (foodId: string) => {
  const { data } = await axiosService.post<Response>("/v1/cart/add", {
    foodId,
  });
  return data;
};
