import axiosService from "./axios";

type AddCommentApiParams = {
  foodId: string;
  text: string;
  rate: number;
};
export const addCommentApi = async ({
  foodId,
  text,
  rate,
}: AddCommentApiParams) => {
  const { data } = await axiosService.post("/v1/comment", {
    foodId,
    text,
    rate,
  });
  return data;
};
