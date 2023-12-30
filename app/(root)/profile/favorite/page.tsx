/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ArrowRight2 } from "iconsax-react";
import React, { useContext, useEffect } from "react";
import { MenuState } from "../layout";
import { useRouter } from "next/navigation";
import useTitle from "@/hooks/useTitle";

const Page = () => {
  const router = useRouter();

  const test = useContext(MenuState);
  useEffect(() => {
    const onPageLoad = () => {
      test?.setIsMenuOpen(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    }
  }, []);

  const backToProfile = () => {
    router.push("/profile");
    test?.setIsMenuOpen(false);
  };

  useTitle("علاقمندی ها");

  return (
    <div>
      <div className="flex items-center justify-between font-estedad">
        <button onClick={backToProfile}>
          <ArrowRight2 className="h-10 w-10 md:hidden" />{" "}
        </button>
        <h1>مورد علاقه</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
