import { Addresses, User } from "@/types/type.d";
import axiosService from "./axios";

// getUserInfo
type GetUserInfo = { data: User | null; statusCode: number | null };
export const getUserInfo = async (): Promise<GetUserInfo> => {
  const { data } = await axiosService.get("/v1/user");
  return data;
};

// getUserAddresses
type GetUserAddress = { page: string; limit: string };
export const getUserAddress = async ({
  page,
  limit,
}: GetUserAddress): Promise<{ data: Addresses[] | []; maxPage: string }> => {
  const { data } = await axiosService.get(
    "/v1/profile/address?page=1&limit=30"
  );
  return data;
};
