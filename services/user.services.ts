import { User } from "@/types/type.d";
import axios from "./axios";

type GetUserInfo = { data: User; statusCode: number };
export const getUserInfo = async (): Promise<GetUserInfo> => {
  const { data } = await axios.get("/v1/user");
  return data;
};
