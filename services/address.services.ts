import { AddAddress, CommonResponse, EditAddressParams } from "@/types/type.d";
import axiosService from "./axios";

// add address
export const addAddressApi = async (addressData: AddAddress) => {
  const { data } = await axiosService.post<CommonResponse>(
    "/v1/profile/address",
    addressData
  );
  return data;
};

// edit address
export const editAddressApi = async ({
  id,
  addressData,
}: EditAddressParams) => {
  const { data } = await axiosService.patch<CommonResponse>(
    `/v1/profile/address/${id}`,
    addressData
  );
  return data;
};

// delete address
export const deleteAddressApi = async (id: string) => {
  const { data } = await axiosService.delete<CommonResponse>(
    `/v1/profile/address/${id}`
  );
  return data;
};
