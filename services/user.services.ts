import { Addresses, User } from "@/types/type.d";
import axiosService from "./axios";

// getUserInfo
type GetUserInfo = { data: User | null; statusCode: number | null };
export const getUserInfo = async (): Promise<GetUserInfo> => {
  const { data } = await axiosService.get("/v1/user");
  return data;
};

// getUserAddresses
type GetUserAddress = { page: number; limit: number };
export const getUserAddress = async ({
  page = 1,
  limit = 2,
}: GetUserAddress): Promise<{ data: Addresses[] | []; maxPage: string }> => {
  const { data } = await axiosService.get(
    `/v1/profile/address?page=${page}&limit=${limit}`
  );
  return data;
};
