"use client";
import { profileLinks } from "@/constants";
import { ProfileLinks } from "@/types/type.d";
import React, { Dispatch, SetStateAction, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { User, Wallet2, Heart, LogoutCurve, Location } from "iconsax-react";

type ProfileTabProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const ProfileHeader = () => {
  return (
    <div className="mb-4 flex items-center gap-x-3 border-b border-muted-700 py-4 md:gap-x-6">
      <div className="h-14 w-14 rounded-full border md:h-24 md:w-24"></div>
      <div className="flex flex-col items-center gap-y-1">
        <p className="body-lg">کاربر ترخینه</p>
        <span className="text-muted-800" dir="ltr">
          0914 864 3350
        </span>
      </div>
    </div>
  );
};

const ProfileTab = ({ isMenuOpen, setIsMenuOpen }: ProfileTabProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleShowMenu = () => {
    router.push("/profile");
    setIsMenuOpen(true);
  };

  const renderIcon = useCallback((type: string) => {
    switch (type) {
      case "profile":
        return <User className="h-5 w-5 text-black" />;

      case "orders":
        return <Wallet2 className="h-5 w-5 text-black" />;

      case "favorite":
        return <Heart className="h-5 w-5 text-black" />;

      case "addresses":
        return <Location className="h-5 w-5 text-black" />;

      case "logout":
        return <LogoutCurve className="h-5 w-5 text-error-200" />;
    }
  }, []);

  return (
    <div
      className={`absolute inset-0 z-50 col-span-12 bg-muted-100 p-2 ${
        isMenuOpen && "hidden"
      }   rounded-8 md:static md:col-span-2 md:block md:h-max md:border`}
    >
      <ProfileHeader />
      <div className="flex flex-col gap-y-2">
        {profileLinks.map((item: ProfileLinks, index: number) => {
          const isActive = item.href === pathName;

          return item.type === "link" ? (
            <Link
              href={item.href!}
              key={index}
              className={`body-lg flex items-center gap-x-2 px-2 py-1 ${
                isActive && "active-link border-r-2 border-primary-800"
              }`}
              onClick={handleShowMenu}
            >
              {renderIcon(item.value)}
              <p>{item.title}</p>
            </Link>
          ) : (
            <button className="body-lg flex w-max items-center gap-x-2 p-2 text-red-500">
              {renderIcon(item.value)}
              <p>{item.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTab;
