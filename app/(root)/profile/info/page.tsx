/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import ProfileInfoForm from "@/components/forms/ProfileInfoForm";
import { ArrowRight2, Edit } from "iconsax-react";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { MenuState } from "../layout";
import { useRouter } from "next/navigation";

const ProfileInfo = () => {
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

export default ProfileInfo;
