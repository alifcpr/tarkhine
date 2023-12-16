import { headerItems, profileItems } from "@/constants";
import { HeaderItems } from "@/types/type.d";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";

const Header = () => {
  const isLogin = true;

  return (
    <div className="flex items-center justify-between bg-muted-100 p-5 lg:px-4 lg:py-8 xl:px-28 xl:py-9">
      <button className="block  md:hidden">
        <Image
          src={"/assets/icons/menu-1.svg"}
          alt="Hamburger menu"
          width={30}
          height={30}
        />
      </button>
      <Link href={"/"}>
        <Image
          src={"/assets/images/Logo.png"}
          className="w-32 md:w-44"
          alt="logo"
          width={300}
          height={300}
        />
      </Link>

      <div className=" hidden items-center gap-x-2 lg:flex">
        {headerItems.map((item: HeaderItems, index: number) => (
          <div key={index} className="group relative">
            <div className="flex cursor-pointer items-center justify-between px-3">
              <p className="lg:body-lg xl:body-xl  text-muted-800">
                {item.title}
              </p>
              {item.dropDownItems && (
                <Image
                  src={"/assets/icons/arrow-down-1.svg"}
                  alt="Arrow Down"
                  width={16}
                  height={16}
                />
              )}
            </div>
            {item.dropDownItems && (
              <DropDown
                content={item.dropDownItems}
                containerClasses="top-5 left-0 w-32 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto smooth-transition"
                ulClasses="mt-5 overflow-hidden"
                textClasses="[&:not(last-child)]:border-b"
              />
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-x-2">
        <button className="hidden rounded-4 bg-primary-100 p-1 md:block md:p-2">
          <Image
            src={"/assets/icons/search-normal.svg"}
            alt="User Icon"
            className="h-5 w-5 md:h-6 md:w-6"
            width={18}
            height={18}
          />
        </button>
        <button className="rounded-4 bg-primary-100 p-1 md:p-2">
          <Image
            src={"/assets/icons/shopping-cart.svg"}
            alt="Shopping cart"
            className="h-5 w-5 md:h-6 md:w-6"
            width={18}
            height={18}
          />
        </button>
        {isLogin ? (
          <button className="group relative">
            <div className="group  flex items-center gap-x-1 rounded-4 bg-primary-600 p-1 text-white md:p-2">
              <Image
                src={"/assets/icons/user-white.svg"}
                alt="User Icon"
                className="h-5 w-5 md:h-6 md:w-6"
                width={18}
                height={18}
              />
              <Image
                src={"/assets/icons/arrow-down-1-white.svg"}
                alt="Arrow Down"
                width={14}
                height={14}
              />
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
            <Image
              src={"/assets/icons/user.svg"}
              alt="User Icon"
              className="h-5 w-5 md:h-6 md:w-6"
              width={18}
              height={18}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
