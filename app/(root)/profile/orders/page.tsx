"use client";
import { ArrowRight2 } from "iconsax-react";
import React, { useContext, useEffect } from "react";
import useTitle from "@/hooks/useTitle";
import { useRouter } from "next/navigation";
import { MenuState } from "../layout";

const Page = () => {
  const router = useRouter();

  const backToProfile = () => {
    router.push("/profile");
    test?.setIsMenuOpen(false);
  };

  const test = useContext(MenuState);
  useEffect(() => {
    const onPageLoad = () => {
      test?.setIsMenuOpen(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    }
  }, []);

  useTitle("سفارشات");

  return (
    <div>
      <div className="flex items-center justify-between font-estedad">
        <button onClick={backToProfile}>
          <ArrowRight2 className="h-10 w-10 md:hidden" />{" "}
        </button>
        <h1>سفارش های من</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
