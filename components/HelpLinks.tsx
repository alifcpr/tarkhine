"use client";
import { helpLinksItems } from "@/constants";
import { HelpLinksItems } from "@/types/type.d";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HelpLinks = () => {
  const pathName = usePathname();
  return (
    <div className="flex items-center gap-x-6 bg-muted-400 px-5 ">
      {helpLinksItems.map((item: HelpLinksItems, index: number) => {
        const isActive = item.href === pathName;

        return (
          <Link
            key={index}
            href={item.href}
            className={` py-3 ${
              isActive
                ? "caption-lg md:h6-bold xl:h5-bold border-b-2 border-primary-800 text-primary-800"
                : "md:body-md xl:body-xl caption-md text-muted-800"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default HelpLinks;
