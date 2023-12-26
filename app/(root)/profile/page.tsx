"use client";
import useTitle from "@/hooks/useTitle";
import { ArrowRight2 } from "iconsax-react";
import React, { useContext } from "react";
import { MenuState } from "./layout";

const ProfilePage = () => {
  const test = useContext(MenuState);

  const backToProfile = () => {
    test?.setIsMenuOpen(false);
  };

  useTitle("علاقمندی ها");

  return (
    <div>
      <div className="flex items-center justify-between font-estedad">
        <button onClick={backToProfile}>
          <ArrowRight2 className="h-10 w-10 md:hidden" />{" "}
        </button>
        <h1>پروفایل</h1>
        <div></div>
      </div>
    </div>
  );
};

export default ProfilePage;
