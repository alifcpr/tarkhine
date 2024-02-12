import { Product } from "@/types/type";

type allProductApiParams = {
  main?: string;
  sub?: string;
  page?: number;
  limit?: number;
  q?: string;
};

type AllProductRes = {
  foods: {
    data: Product[];
    subCategory: string;
  }[];
  maxPage: number;
  statusCode: number;
};
export const getAllProductApi = async ({
  main,
  sub,
  page,
  limit,
  q,
}: allProductApiParams): Promise<AllProductRes> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/food?main=${main}&sub=${sub}&page=${page}&limit=${limit}&q=${q}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

type getProductByIdRes = { data: Product; statusCode: number };
export const getProductByIdApi = async (
  id: string
): Promise<getProductByIdRes> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/food/id/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};
