"use client";
import React, { useState } from "react";
import {
  CallCalling,
  HambergerMenu,
  Home,
  HomeHashtag,
  MenuBoard,
  Profile2User,
} from "iconsax-react";
import { mobileLinks } from "@/constants";
import { MobileLinks as MLType } from "@/types/type.d";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Drawer from "./Drawer";
import Accordian from "../Accordian";

// types
type MobileLinksProps = {
  closeDrawer: () => void;
};

const MobileLinks = ({ closeDrawer }: MobileLinksProps) => {
  // hooks
  const pathName = usePathname();

  // Icon rendering based on button type
  const renderIcon = (type: string) => {
    switch (type) {
      case "home page":
        return <Home className="h-5 w-5 text-black" />;
      case "branch":
        return <HomeHashtag className="h-5 w-5 text-black" />;

      case "menu":
        return <MenuBoard className="h-5 w-5 text-black" />;

      case "about":
        return <Profile2User className="h-5 w-5 text-black" />;

      case "contact":
        return <CallCalling className="h-5 w-5 text-black" />;
    }
  };

  return (
    <ul className="px-2">
      {mobileLinks.map((item: MLType, index: number) => {
        const isActive = pathName === item.href;

        return (
          <li
            key={index}
            className={`caption-lg border-muted-500 py-2 [&:not(first-child)]:border-b ${
              isActive && "text-primary-800"
            }`}
          >
            {item.type === "link" ? (
              // item is a link
              <Link
                href={item.href!}
                onClick={closeDrawer}
                className="flex w-full items-center gap-x-2"
              >
                {item.icon && renderIcon(item.value)}
                <p>{item.title}</p>
              </Link>
            ) : (
              // item is a accordion
              <Accordian
                icon={renderIcon(item.value)}
                title={item.title}
                contentClasses="flex flex-col pe-5"
                titleContainer="gap-2"
              >
                {item.accordionItems?.map(
                  (accordionContent: any, index: number) => (
                    <Link
                      onClick={closeDrawer}
                      href={accordionContent.href}
                      key={index}
                    >
                      <div className="caption-md mt-2 rounded-8 bg-primary-100 p-2 hover:bg-primary-100">
                        {accordionContent.title}
                      </div>
                    </Link>
                  )
                )}
              </Accordian>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const MobileNav = () => {
  // Drawer state
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button className="block lg:hidden" onClick={() => setOpen(true)}>
        <HambergerMenu className="h-8 w-8 text-primary-800" />
      </button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <MobileLinks closeDrawer={() => setOpen(false)} />
      </Drawer>
    </>
  );
};

export default MobileNav;
