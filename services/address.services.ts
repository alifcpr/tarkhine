import { AddAddress } from "@/types/type.d";
import axiosService from "./axios";

// add address
type AddAddressApi = { message: string; statusCode: number };
export const addAddressApi = async (
  addressData: AddAddress
): Promise<AddAddressApi> => {
  const { data } = await axiosService.post("/v1/profile/address", addressData);
  return data;
};

// edit address
type EditAddressApi = { id: string; addressData: AddAddress };
export const editAddressApi = async ({ id, addressData }: EditAddressApi) => {
  const { data } = await axiosService.patch(
    `/v1/profile/address/${id}`,
    addressData
  );
  return data;
};

// delete address
type DeleteAddressApi = {message: string; statusCode: number}
export const deleteAddressApi = async (id: string): Promise<DeleteAddressApi> => {
  const { data } = await axiosService.delete(`/v1/profile/address/${id}`);
  return data;
};
