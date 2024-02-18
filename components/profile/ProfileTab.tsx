"use client";
import { profileLinks } from "@/constants";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenu } from "@/providers/ProfileMenuStateProvider";
import useUser from "@/hooks/useUser";
import ProfileImage from "../ProfileImage";
import LogOut from "../shared/LogOut";

const ProfileHeader = () => {
  const { data } = useUser();

  return (
    <div className="mb-4 flex items-center gap-x-3 border-b border-muted-700 py-4 md:gap-x-6">
      <ProfileImage image={data?.imageUrl} />
      <div className="flex flex-col items-center justify-center gap-y-1">
        <p
          title={data?.name}
          className="body-lg truncate md:w-[10vw] lg:w-[15vw] xl:w-[12vw] 2xl:w-[5vw]"
        >
          {data?.name} {data?.family}
        </p>
        <span className="text-muted-800" dir="ltr">
          {data?.phone}
        </span>
      </div>
    </div>
  );
};

const ProfileTab = () => {
  const pathName = usePathname();
  const { isMenuOpen } = useMenu();

  return (
    <div
      className={`absolute inset-0 z-50 col-span-12 bg-muted-100 p-2 ${
        isMenuOpen ? "" : "hidden"
      }   rounded-8 md:static md:col-span-4 md:block md:h-max md:border xl:col-span-3 2xl:col-span-2`}
    >
      <ProfileHeader />
      <div className="flex flex-col gap-y-2 px-2">
        {profileLinks.map(({ Icon, href, title }, index: number) => {
          const isActive = href === pathName;

          return (
            <>
              <Link
                href={href}
                key={index}
                className={`body-lg flex items-center gap-x-2 px-2 py-1 ${
                  isActive && "active-link border-r-2 border-primary-800"
                }`}
              >
                <Icon className="h-5 w-5" />
                <p>{title}</p>
              </Link>
            </>
          );
        })}
        <LogOut
          containerClasses="px-2 !text-error-200"
          iconClasses="w-5 h-5 text-error-200"
          textClasses="body-lg py-1"
        />
      </div>
    </div>
  );
};

export default ProfileTab;
