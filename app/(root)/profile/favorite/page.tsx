"use client";
import { ArrowRight2 } from "iconsax-react";
import React from "react";
import useProfileMenuController from "@/hooks/useProfileMenuController";
import useTitle from "@/hooks/useTitle";
import FoodFilter from "@/components/filters/FoodFilter";
import Search from "@/components/shared/filters/Search";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getAllFavoriteFoodsApi } from "@/services/user.services";
import FavoriteCard from "@/components/cards/FavoriteCard";
import NotFound from "@/components/NotFound";
import Pagination from "@/components/Pagination";
import Empty from "@/components/profile/Empty";
import Loading from "./loading";

const Page = () => {
  // for back to profile page and open menu
  const { backToProfilePage } = useProfileMenuController();

  // page title
  useTitle("غذای های موردعلاقه ی من");

  const searchParams = useSearchParams();
  const mainCategory = searchParams.get("mainCategory") ?? "";
  const pageQuery = searchParams.get("page") ?? 1;
  const limitQuery = searchParams.get("limit") ?? 10;
  const searchQuery = searchParams.get("q") ?? "";

  const { data, isLoading } = useQuery({
    queryKey: ["foods", mainCategory, pageQuery, limitQuery, searchQuery],
    queryFn: async () =>
      await getAllFavoriteFoodsApi({
        main: mainCategory,
        page: +pageQuery,
        limit: +limitQuery,
        q: searchQuery,
      }),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (data)
    return (
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center justify-between font-estedad">
          <button onClick={backToProfilePage}>
            <ArrowRight2 className="h-7 w-7 md:hidden" />
          </button>
          <h1 className="h5-bold p-3 md:w-full md:border-b">علاقه مندی</h1>
          <div></div>
        </div>
        <div className="flex flex-col items-center justify-between md:items-start lg:flex-row lg:items-center lg:gap-x-3">
          <FoodFilter
            buttonClasses="body-md px-2 py-1 bg-muted-400 mr-3 first:mr-0 whitespace-nowrap mt-4 lg:mt-0 rounded-64 2xl:px-3 2xl:py-2"
            activeClasses="bg-primary-100 text-primary-800"
          />
          <Search
            containerClasses="order-first w-full lg:order-last xl:w-1/2 xl:w-1/3"
            mode="Write"
            query="q"
          />
        </div>
        <div className="relative mt-10 grid grid-cols-12 gap-2 pb-3">
          {data.favoriteFood.length > 0 ? (
            data.favoriteFood.map((item) => (
              <FavoriteCard data={item} key={item._id} />
            ))
          ) : (
            <div className="col-span-12 mb-4 flex items-center justify-center">
              {mainCategory || searchQuery || pageQuery ? (
                <NotFound title="موردی با این مشخصات یافت نشد" />
              ) : (
                <Empty
                  btnLabel="رفتن به منو"
                  title="هیچ غذایی هنوز به لیست مورد علاقه هات اضافه نکردی !"
                  href="/menu"
                />
              )}
            </div>
          )}
        </div>
        <Pagination totalPage={data.maxPage} />
      </div>
    );
};

export default Page;
