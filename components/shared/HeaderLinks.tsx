"use client";
import { headerLinks } from "@/constants";
import { HeaderLinks as HLType } from "@/types/type.d";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { ArrowDown2 } from "iconsax-react";
import DropDown from "./DropDown";

const HeaderLinks = () => {
  // for get current page path
  const pathName = usePathname();

  return (
    <>
      {headerLinks.map((item: HLType, index: number) => {
        const isActive = pathName === item.href;

        return (
          <div key={index} className="group relative">
            <div className="flex cursor-pointer items-center justify-between px-3">
              {item.type === "link" ? (
                <Link
                  href={item.href!}
                  className={
                    isActive
                      ? "lg:h7-semibold xl:h5-bold whitespace-nowrap border-b-2 border-primary-800 py-2 text-primary-800 "
                      : "lg:body-lg xl:body-xl text-muted-800"
                  }
                >
                  {item.title}
                </Link>
              ) : (
                <p className="lg:body-lg xl:body-xl flex cursor-pointer items-center justify-between px-3 text-muted-800">
                  {item.title}
                </p>
              )}

              {item.dropDownItems && (
                <ArrowDown2 className="h-4 w-4 text-muted-800" />
              )}
            </div>
            {item.dropDownItems && (
              <DropDown containerClasses="smooth-transition opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto !w-32">
                {item.dropDownItems.map((dropItem) => (
                  <DropDown.Item key={dropItem._id}>
                    <Link href={dropItem.href}>
                      {dropItem.title}
                    </Link>
                  </DropDown.Item>
                ))}
              </DropDown>
            )}
          </div>
        );
      })}
    </>
  );
};

export default HeaderLinks;
