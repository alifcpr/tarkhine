"use client";
import { ArrowRight2 } from "iconsax-react";
import React, { useContext } from "react";
import { MenuState } from "../layout";
import { useRouter } from "next/navigation";
import useTitle from "@/hooks/useTitle";

const Page = () => {
  const test = useContext(MenuState);
  const router = useRouter();

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