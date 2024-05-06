/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ArrowRight2 } from "iconsax-react";
import React from "react";
import useProfileMenuController from "@/hooks/useProfileMenuController";
import useTitle from "@/hooks/useTitle";
import OrdersFilter from "@/components/filters/OrdersFilter";
import { useQuery } from "@tanstack/react-query";
import { getUserOrdersApi } from "@/services/user.services";
import { Oval } from "react-loader-spinner";
import { v4 as uuiv4 } from "uuid";
import OrderCart from "@/components/cards/OrderCart";

const Page = () => {
  // for back to profile page and open menu
  const { backToProfilePage } = useProfileMenuController();

  // page title
  useTitle("سفارش های من");

  const { data, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => await getUserOrdersApi(),
  });

  return (
    <div>
      <div className="h-full">
        <div className="flex items-center justify-between p-3 font-estedad md:border-b">
          <button onClick={backToProfilePage}>
            <ArrowRight2 className="h-10 w-10 md:hidden" />
          </button>
          <h1 className="h5-bold mx-auto md:w-full">سفارشات</h1>
        </div>
      </div>
      <div className="mt-3">
        <OrdersFilter />
      </div>

      {isLoading && (
        <div className="flex h-[400px] w-full items-center justify-center ">
          <Oval
            width={40}
            height={40}
            wrapperClass={"text-white"}
            strokeWidthSecondary={10}
            strokeWidth={5}
            color={"#000"}
            secondaryColor={"#000"}
          />
        </div>
      )}
      {!isLoading && data && (
        <div className="mt-4 flex flex-col gap-y-4">
          {data.userOrders.map((orderData: any) => (
            <OrderCart data={orderData} key={uuiv4()} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Page;
