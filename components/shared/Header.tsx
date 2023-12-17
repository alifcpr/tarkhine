import { profileItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";
import { ArrowDown2, SearchNormal1, ShoppingCart, User } from "iconsax-react";
import HeaderLinks from "./HeaderLinks";
import MobileNav from "./MobileNav";

const Header = () => {
  const isLogin = true;

  return (
    <div className="flex items-center justify-between bg-muted-100 p-5 lg:px-4 lg:py-8 xl:px-28 xl:py-9">
      <button className="block  lg:hidden">
        <MobileNav />
      </button>
      <Link href={"/"}>
        <Image
          src={"/assets/images/Logo.png"}
          className="w-32 md:w-44"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>

      <div className=" hidden items-center gap-x-2 lg:flex">
        <HeaderLinks />
      </div>

      <div className="flex items-center gap-x-2">
        <button className="hidden rounded-4 bg-primary-100 p-1 md:block md:p-2">
          <SearchNormal1 className="h-5 w-5 text-primary-800 md:h-6 md:w-6" />
        </button>
        <button className="rounded-4 bg-primary-100 p-1 md:p-2">
          <ShoppingCart className="h-5 w-5 text-primary-800 md:h-6 md:w-6" />
        </button>
        {isLogin ? (
          <button className="group relative">
            <div className="group  flex items-center gap-x-1 rounded-4 bg-primary-600 p-1 text-white md:p-2">
              <User className="h-5 w-5 text-white md:h-6 md:w-6" />
              <ArrowDown2 className="h-5 w-5 text-white md:h-6 md:w-6" />
            </div>
            <DropDown
              content={profileItems}
              containerClasses="w-max left-0 top-8 smooth-transition opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
              ulClasses="mt-5 overflow-hidden"
              textClasses="whitespace-nowrap [&:not(last-child)]:border-b"
            />
          </button>
        ) : (
          <button className="rounded-4 bg-primary-100 p-1 md:p-2">
            <User className="h-5 w-5 text-primary-800 md:h-6 md:w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
