import {
  CartQuantityResponse,
  CheckDiscountCodeResponse,
  CommonResponse,
  ShoppingCartList,
  sendToPaymentGatewayParams,
  sendToPaymentGatewayResponse,
} from "@/types/type";
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

export const increaseShoppingCartApi = async (foodId: string) => {
  const { data } = await axiosService.put<CommonResponse>("/v1/cart/inc-food", {
    foodId,
  });
  return data;
};

export const decreaseShoppingCartApi = async (foodId: string) => {
  const { data } = await axiosService.put<CommonResponse>("/v1/cart/dec-food", {
    foodId,
  });
  return data;
};

export const sendToPaymentGateway = async (
  params: sendToPaymentGatewayParams
) => {
  const { data } = await axiosService.post<sendToPaymentGatewayResponse>(
    "/v1/payment/gateway",
    params.discountCode
      ? {
          addressId: params.addressId,
          discountCode: params.discountCode,
        }
      : {
          addressId: params.addressId,
        }
  );
  return data;
};

export const checkShoppingCartDiscountCodeApi = async (
  discountCode: string
) => {
  const { data } = await axiosService.post<CheckDiscountCodeResponse>(
    "/v1/cart",
    { discountCode }
  );
  return data;
};

export const cartQuantityApi = async () => {
  const { data } =
    await axiosService.get<CartQuantityResponse>("/v1/cart/count");
  return data;
};
