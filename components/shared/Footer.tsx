"use client";
import { Instagram } from "iconsax-react";
import React from "react";
import MessageBox from "./MessageBox";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathName = usePathname();

  const doNotshowRouteLists = [
    "/profile",
    "/profile/addresses",
    "/profile/orders",
    "/profile/favorite",
    "/profile/edit",
    "/login",
  ];

  // do not show component in this routes
  if (doNotshowRouteLists.includes(pathName)) {
    return null;
  }

  return (
    <>
      <div className="flex items-start justify-evenly bg-black/80 bg-[url(/assets/images/footer-image.jpg)] bg-cover bg-center p-5 text-muted-100 bg-blend-darken xl:justify-between xl:px-28 xl:py-8">
        <ul className="flex flex-col items-center gap-y-5">
          <li className="body-sm xl:h5-bold lg:body-lg mb-1">دسترسی آسان</li>
          <li className="caption-md xl:body-md lg:caption-lg">
            پرسش های متداول
          </li>
          <li className="caption-md xl:body-md lg:caption-lg">قوانین ترخینه</li>
          <li className="caption-md xl:body-md lg:caption-lg">حریم خصوصی</li>
          <li className="flex items-center justify-center gap-x-2">
            <Instagram className="h-5 w-5" />
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-y-5">
          <li className="body-sm xl:h5-bold lg:body-lg mb-1">
            شعبه های ترخینه
          </li>
          <li className="caption-md xl:body-md md:caption-lg">شعبه اکباتان</li>
          <li className="caption-md xl:body-md md:caption-lg">شعبه چالوس</li>
          <li className="caption-md xl:body-md md:caption-lg">شعبه اقدسیه</li>
          <li className="caption-md xl:body-md md:caption-lg">شعبه ونک</li>
        </ul>
        <MessageBox />
      </div>
    </>
  );
};

export default Footer;
