import SearchSection from "@/components/sections/SearchSection";
import Search from "@/components/filters/Search";
import { getProductBySearchApi } from "@/services/product.services";
import { QueryClient, dehydrate, Hydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import React from "react";

interface PageParams {
  params: {
    productName: string;
  };
}

export const generateMetadata = async ({
  params: { productName },
}: {
  params: { productName: string };
}): Promise<Metadata> => {
  return {
    title: `جستجو : ${decodeURIComponent(productName)}`,
  };
};

const Page = async ({ params: { productName } }: PageParams) => {
  // handle get product by search api
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["foods"],
    queryFn: async () => await getProductBySearchApi(productName),
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-y-5">
        <h1 className="h4-bold">
          نتایج جستجو برای :
          <span className="text-primary-800">
            {decodeURIComponent(productName)}
          </span>
        </h1>
        <Search
          mode="Enter"
          value={decodeURIComponent(productName)}
          containerClasses="!min-w-[340px] md:!min-w-[440px] !py-2 "
        />
      </div>
      <Hydrate state={dehydrate(queryClient)}>
        <SearchSection productName={decodeURIComponent(productName)} />
      </Hydrate>
    </div>
  );
};

export default Page;
