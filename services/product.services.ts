import {
  AllProductResponse,
  GetProductByIdResponse,
  allProductParams,
  getProductBySearchResponse,
} from "@/types/type";

export const getAllProductApi = async ({
  main,
  sub,
  page,
  limit,
  q,
}: allProductParams): Promise<AllProductResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/food?main=${main}&sub=${sub}&page=${page}&limit=${limit}&q=${q}`,
    { cache: "no-store", credentials: "include" }
  );
  const data = await res.json();
  return data;
};

export const getProductByIdApi = async (
  id: string
): Promise<GetProductByIdResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/food/id/${id}`,
    { cache: "no-store", credentials: "include" }
  );
  const data = await res.json();
  return data;
};

export const getProductBySearchApi = async (
  search: string
): Promise<getProductBySearchResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}v1/home/search?search=${search}`,
    { credentials: "include", cache: "no-store" }
  );
  const data = await res.json();
  return data;
};
