import { CheckOtpParams, CheckOtpResponse, CommonResponse } from "@/types/type";
import axiosService from "./axios";

export const getOtpApi = async (phone: string) => {
  const { data } = await axiosService.post<CommonResponse>("/v1/auth/get-otp", {
    phone,
  });
  return data;
};


export const checkOtpApi = async ({ phone, otpCode }: CheckOtpParams) => {
  const { data } = await axiosService.post<CheckOtpResponse>("/v1/auth/check-otp", {
    phone,
    otpCode,
  });
  return data;
};

export const logOutApi = async () => {
  const { data } = await axiosService.get<CommonResponse>("/v1/auth/logout");
  return data;
};

export const resendCodeApi = async (phone: string) => {
  const { data } = await axiosService.post<CommonResponse>("/v1/auth/resend-code", { phone });
  return data;
};
