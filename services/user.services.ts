import { Addresses, User } from "@/types/type.d";
import axiosService from "./axios";

// getUserInfo
type GetUserInfo = { data: User | null; statusCode: number | null };
export const getUserInfo = async (): Promise<GetUserInfo> => {
  try {
    const { data } = await axiosService.get("/v1/user");
    return data;
  } catch {
    return { data: null, statusCode: 401 };
  }
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

// user edit profile
type EditProfileApi = { message: string; statusCode: number };
export const editProfileApi = async (
  userData: User
): Promise<EditProfileApi> => {
  const { data } = await axiosService.post("/v1/profile/user", userData);
  return data;
};
