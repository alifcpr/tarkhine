/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ArrowRight2 } from "iconsax-react";
import React from "react";
import useProfileMenuController from "@/hooks/useProfileMenuController";
import useTitle from "@/hooks/useTitle";

const Page = () => {
  // for back to profile page and open menu
  const { backToProfilePage } = useProfileMenuController();

  // page title
  useTitle("سفارش های من");

  return (
    <>
      <div className="h-full">
        <div className="flex items-center justify-between p-3 font-estedad md:border-b">
          <button onClick={backToProfilePage}>
            <ArrowRight2 className="h-10 w-10 md:hidden" />
          </button>
          <h1 className="h5-bold mx-auto md:w-full">سفارشات</h1>
        </div>
      </div>
    </>
  );
};
export default Page;
