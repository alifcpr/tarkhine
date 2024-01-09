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
  useTitle("غذای های موردعلاقه ی من");

  return (
    <div>
      <div className="flex items-center justify-between font-estedad">
        <button onClick={backToProfilePage}>
          <ArrowRight2 className="h-10 w-10 md:hidden" />{" "}
        </button>
        <h1>مورد علاقه</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
