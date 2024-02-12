import axiosService from "./axios";

type ResponseType = { message: string; statusCode: number };

export const getOtpApi = async (phone: string): Promise<ResponseType> => {
  const { data } = await axiosService.post("/v1/auth/get-otp", { phone });
  return data;
};

type CheckOtpParams = { phone: string; otpCode: number };
type checkOtpApiRes = {
  message: string;
  statusCode: number;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};
export const checkOtpApi = async ({
  phone,
  otpCode,
}: CheckOtpParams): Promise<checkOtpApiRes> => {
  const { data } = await axiosService.post("/v1/auth/check-otp", {
    phone,
    otpCode,
  });
  return data;
};

export const logOutApi = async (): Promise<ResponseType> => {
  const { data } = await axiosService.get("/v1/auth/logout");
  return data;
};

export const resendCodeApi = async (phone: string): Promise<ResponseType> => {
  const { data } = await axiosService.post("/v1/auth/resend-code", { phone });
  return data;
};
