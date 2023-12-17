"use client";
import { headerItems } from "@/constants";
import { HeaderItems } from "@/types/type.d";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { ArrowDown2 } from "iconsax-react";
import DropDown from "./DropDown";

const HeaderLinks = () => {
  const pathName = usePathname();

  return (
    <>
      {headerItems.map((item: HeaderItems, index: number) => {
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
              <DropDown
                content={item.dropDownItems}
                containerClasses="top-5 left-0 w-32 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto smooth-transition"
                ulClasses="mt-5 overflow-hidden"
                textClasses="[&:not(last-child)]:border-b"
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default HeaderLinks;
