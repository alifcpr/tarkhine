/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ProfileInfoForm from "@/components/forms/ProfileInfoForm";
import { ArrowRight2 } from "iconsax-react";
import React from "react";
import useProfileMenuController from "@/hooks/useProfileMenuController";
import useTitle from "@/hooks/useTitle";

const ProfileInfo = () => {
  // for back to profile page and open menu
  const { backToProfilePage } = useProfileMenuController();

  // page title
  useTitle("اطلاعات حساب کاربری");

  return (
    <div>
      <div className="flex items-center justify-between font-estedad">
        <button onClick={backToProfilePage}>
          <ArrowRight2 className="h-7 w-7 md:hidden" />{" "}
        </button>
        <h1 className="h5-bold p-3 md:w-full md:border-b ">پروفایل</h1>
        <div></div>
      </div>
      <ProfileInfoForm />
      <div className="mt-5 flex items-center justify-center"></div>
    </div>
  );
};

export default ProfileInfo;
