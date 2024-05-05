import SearchSection from "@/components/sections/SearchSection";
import Search from "@/components/shared/filters/Search";
import { getProductBySearchApi } from "@/services/product.services";
import { QueryClient, dehydrate, Hydrate } from "@tanstack/react-query";
import React from "react";

interface PageParams {
  params: {
    productName: string;
  };
}

const Page = async ({ params: { productName } }: PageParams) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["foods", productName],
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
