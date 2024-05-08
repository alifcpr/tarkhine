"use client";
import { profileLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";
import { ArrowDown2, ShoppingCart, User } from "iconsax-react";
import HeaderLinks from "./HeaderLinks";
import MobileNav from "./MobileNav";
import SearchBox from "../filters/SearchBox";
import { usePathname } from "next/navigation";
import useUser from "@/hooks/useUser";
import LogOut from "./LogOut";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@tanstack/react-query";
import { cartQuantityApi } from "@/services/shopping_cart-services";

const Header = () => {
  const pathName = usePathname();

  const { data: cartInfo, isLoading: isGettingCartInfoLoading } = useQuery({
    queryKey: ["cart-quantity"],
    queryFn: async () => await cartQuantityApi(),
  });

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
          <Link
            href={"/cart"}
            className="relative rounded-4 bg-primary-100 p-1 md:p-2"
          >
            {!isGettingCartInfoLoading &&
              cartInfo &&
              cartInfo.numberOfCart.carts > 0 && (
                <p className="caption-sm md:caption-md absolute right-0 top-0 flex h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary-800 text-muted-100 md:right-0.5 md:top-0.5 md:h-5 md:w-5">
                  {cartInfo.numberOfCart.carts}
                </p>
              )}
            <ShoppingCart className="h-5 w-5 text-primary-800 md:h-6 md:w-6" />
          </Link>
          {status === "authorized" ? (
            <button disabled={isLoading} className="group relative">
              <span className="group  flex items-center gap-x-1 rounded-4 bg-primary-600 p-1 text-white md:p-2">
                <User className="h-5 w-5 text-white md:h-6 md:w-6" />
                <ArrowDown2 className="h-5 w-5 text-white md:h-6 md:w-6" />
              </span>
              <DropDown containerClasses="smooth-transition opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                {profileLinks.map(({ Icon, href, title }) => (
                  <DropDown.Item key={uuidv4()}>
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
