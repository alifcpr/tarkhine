import ProductDetail from "@/components/sections/ProductDetail";
import { getProductByIdApi } from "@/services/product.services";
import { Hydrate, QueryClient, dehydrate } from "@tanstack/react-query";
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
    <>
      <Hydrate state={dehydrate(queryClient)}>
        <ProductDetail foodId={params.id} />
      </Hydrate>
    </>
  );
};

export default Page;
