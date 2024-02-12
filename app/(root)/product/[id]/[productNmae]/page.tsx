import ProductDetail from "@/components/sections/ProductDetail";
import { getProductByIdApi } from "@/services/product.services";
import { Hydrate, QueryClient, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import React from "react";

type PageProps = {
  params: { id: string; productName: string };
};

const Page = async ({ params }: PageProps) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["foods"],
    queryFn: async () => await getProductByIdApi(params.id),
  });

  return (
    <Hydrate state={dehydrate(queryClient)}>
      <ProductDetail foodId={params.id} />
    </Hydrate>
  );
};

export const generateMetadata = async ({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const { data } = await getProductByIdApi(id);
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: data.imagesUrl[0],
    },
  };
};

export default Page;
