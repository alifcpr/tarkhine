"use client";
import { profileLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";
import { ArrowDown2, ShoppingCart, User } from "iconsax-react";
import HeaderLinks from "./HeaderLinks";
import MobileNav from "./MobileNav";
import SearchBox from "./filters/SearchBox";
import { usePathname } from "next/navigation";
import useUser from "@/hooks/useUser";
import LogOut from "./LogOut";

const Header = () => {
  const pathName = usePathname();

  // User authentication status
  const { isLoading, status } = useUser();

  // do not show this component in these routes
  const doNotshowRouteLists = ["/login"];
  if (doNotshowRouteLists.includes(pathName)) {
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-between bg-muted-100 p-5 lg:px-4 lg:py-8 xl:px-14 xl:py-9 2xl:px-28">
        <MobileNav />
        <Link href={"/"}>
          <Image
            src={"/assets/images/Logo.png"}
            className="w-32 md:w-44"
            alt="logo"
            width={200}
            height={200}
          />
        </Link>

        <div className=" hidden items-center gap-x-2 lg:flex">
          <HeaderLinks />
        </div>

        <div className="flex items-center gap-x-2">
          <SearchBox />
          <button className="rounded-4 bg-primary-100 p-1 md:p-2">
            <ShoppingCart className="h-5 w-5 text-primary-800 md:h-6 md:w-6" />
          </button>
          {status === "authorized" ? (
            <button disabled={isLoading} className="group relative">
              <span className="group  flex items-center gap-x-1 rounded-4 bg-primary-600 p-1 text-white md:p-2">
                <User className="h-5 w-5 text-white md:h-6 md:w-6" />
                <ArrowDown2 className="h-5 w-5 text-white md:h-6 md:w-6" />
              </span>
              <DropDown containerClasses="smooth-transition opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                {profileLinks.map(({ Icon, _id, href, title }) => (
                  <DropDown.Item key={_id}>
                    <div className="flex items-center gap-x-2">
                      <Icon className="h-5 w-5 text-muted-950" />
                      <Link href={href}>{title}</Link>
                    </div>
                  </DropDown.Item>
                ))}
                <DropDown.Item>
                  <LogOut iconClasses="w-5 h-5 text-muted-950" />
                </DropDown.Item>
              </DropDown>
            </button>
          ) : (
            <Link
              href={"/login"}
              className={`smooth-transition rounded-4 bg-primary-100 p-1 md:p-2 ${
                isLoading && "pointer-events-none opacity-80"
              }`}
            >
              <User className="h-5 w-5 text-primary-800 md:h-6 md:w-6" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
