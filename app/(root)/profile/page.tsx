"use client";
import useTitle from "@/hooks/useTitle";
import { ArrowRight2, Edit } from "iconsax-react";
import React, { useContext } from "react";
import { MenuState } from "./layout";
import ProfileInfoForm from "@/components/forms/ProfileInfoForm";
import Link from "next/link";

const ProfilePage = () => {
  const test = useContext(MenuState);

  const backToProfile = () => {
    test?.setIsMenuOpen(false);
  };

  useTitle("پروفایل");

  return (
    <div>
      <div className="flex items-center justify-between font-estedad">
        <button onClick={backToProfile}>
          <ArrowRight2 className="h-7 w-7 md:hidden" />{" "}
        </button>
        <h1 className="h5-bold p-3 md:w-full md:border-b ">پروفایل</h1>
        <div></div>
      </div>
      <ProfileInfoForm type="See" />
      <div className="mt-5 flex items-center justify-center">
        <Link
          className="button-outline-primary flex items-center gap-x-3 rounded-8 px-3 py-2 text-primary-800"
          href={"/profile/edit"}
        >
          <Edit />
          <span>ویرایش اطلاعات شخصی</span>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
