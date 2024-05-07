import {
  CommonResponse,
  GetAllFavoriteFoodsParams,
  GetAllFavoriteFoodsResponse,
  GetUserAddressParams,
  GetUserAddressResponse,
  GetUserInfoResponse,
  UploadProfileImageParams,
  User,
  getUserOrdersParams,
  getUserOrdersResponse,
} from "@/types/type.d";
import axiosService from "./axios";

// getUserInfo
export const getUserInfo = async () => {
  try {
    const { data } = await axiosService.get<GetUserInfoResponse>("/v1/user");
    return data;
  } catch {
    return { data: null, statusCode: 401 };
  }
};

// getUserAddresses
export const getUserAddress = async ({
  page = 1,
  limit = 2,
}: GetUserAddressParams) => {
  const { data } = await axiosService.get<GetUserAddressResponse>(
    `/v1/profile/address?page=${page}&limit=${limit}`
  );
  return data;
};

// user edit profile
export const editProfileApi = async (userData: User) => {
  const { data } = await axiosService.post<CommonResponse>(
    "/v1/profile/user",
    userData
  );
  return data;
};

export const addToFavoriteApi = async (foodId: string) => {
  const { data } = await axiosService.post<CommonResponse>(
    `/v1/profile/favorite-food?foodId=${foodId}`
  );
  return data;
};

export const deleteFromFavoriteApi = async (foodId: string) => {
  const { data } = await axiosService.delete<CommonResponse>(
    `/v1/profile/favorite-food?foodId=${foodId}`
  );
  return data;
};

export const uploadProfileImageApi = async ({
  file,
  setLoadingProgress,
}: UploadProfileImageParams) => {
  const { data } = await axiosService.patch<CommonResponse>(
    "/v1/profile/image",
    file,
    {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        const progress = Math.ceil((loaded * 100) / total!);
        setLoadingProgress(progress);
      },
    }
  );
  return data;
};

export const deleteProfileImageApi = async () => {
  const { data } =
    await axiosService.delete<CommonResponse>("/v1/profile/image");
  return data;
};

export const getAllFavoriteFoodsApi = async ({
  main,
  page,
  limit,
  q,
}: GetAllFavoriteFoodsParams) => {
  const { data } = await axiosService.get<GetAllFavoriteFoodsResponse>(
    `/v1/profile/favorite-food?main=${main}&q=${q}&page=${page}&limit=${limit}`
  );
  return data;
};

export const logOutApi = async () => {
  const { data } = await axiosService.get<CommonResponse>("/v1/auth/logout");
  return data;
};

export const getUserOrdersApi = async (params: getUserOrdersParams) => {
  const { data } = await axiosService.get<getUserOrdersResponse>(
    `/v1/profile/orders?status=${params.stauts}`
  );
  return data;
};
