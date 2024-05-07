"use client";
import { Instagram } from "iconsax-react";
import React from "react";
import MessageBox from "./MessageBox";
import { usePathname } from "next/navigation";
import { helpLinksItems } from "@/constants";
import { HelpLinksItems } from "@/types/type.d";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Footer = () => {
  const pathName = usePathname();

  const doNotshowRouteLists = ["/login"];

  // do not show component in this routes
  if (doNotshowRouteLists.includes(pathName)) {
    return null;
  }

  return (
    <div className="flex w-full flex-col   bg-black/80 bg-[url(/assets/images/footer-image.jpg)] bg-cover bg-center p-5 text-muted-100 bg-blend-darken  xl:px-10 xl:py-8 2xl:px-28">
      <div className="flex w-full items-start justify-evenly xl:justify-between">
        <ul className="flex flex-col items-center gap-y-5">
          <li className="body-sm xl:h5-bold lg:body-lg mb-1">دسترسی آسان</li>
          {helpLinksItems.map((item: HelpLinksItems) => (
            <li key={uuidv4()} className="caption-md xl:body-md lg:caption-lg">
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
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
      <div className=" mt-4 flex flex-col  items-center  justify-center gap-y-2">
        <p className="caption-md md:caption-lg xl:body-md">
          توسعه داده شده توسط
        </p>
        <div className="caption-md md:caption-lg xl:body-md flex flex-col items-center  gap-x-5 md:flex-row">
          <div className="flex items-center gap-x-1">
            <a
              target="_blank"
              href={"https://www.linkedin.com/in/ali-esfahani-baa6b3237/"}
            >
              <IoLogoLinkedin className="h-6 w-6" />
            </a>
            <a target="_blank" href={"https://github.com/alifcpr"}>
              <FaGithubSquare className="ml-1 h-5 w-5" />
            </a>
            <p>علی اصفهانی (فرانت اند) </p>
          </div>
          <div className="flex items-center gap-x-1">
            <a
              target="_blank"
              href={"https://www.linkedin.com/in/sadra-soleimani-48465a255/"}
            >
              <IoLogoLinkedin className="h-6 w-6" />
            </a>
            <a target="_blank" href={"https://github.com/sadrax4"}>
              <FaGithubSquare className="ml-1 h-5 w-5" />
            </a>
            <p>صدرا سلیمانی (بک اند)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
