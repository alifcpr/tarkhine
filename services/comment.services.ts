import { AddCommentParams, CommonResponse } from "@/types/type";
import axiosService from "./axios";

export const addCommentApi = async ({
  foodId,
  text,
  rate,
}: AddCommentParams) => {
  const { data } = await axiosService.post<CommonResponse>("/v1/comment", {
    foodId,
    text,
    rate,
  });
  return data;
};
