import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import React from "react";
type BreadCrumbProps = {
  children: React.ReactNode;
};

type BreadCrumbItemProps = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
};

const BreadCrumbItem = ({ children, href, active }: BreadCrumbItemProps) => {
  return (
    <li className="caption-lg md:body-md group flex items-center">
      <Link
        href={href}
        className={`whitespace-nowrap ${
          active
            ? "pointer-events-none font-semibold text-primary-800"
            : "hover:text-primary-700"
        }`}
      >
        {children}
      </Link>
      {!active && (
        <ArrowLeft2 className="smooth-transition h-5 w-5 text-primary-800 group-hover:rotate-180 md:h-6 md:w-6" />
      )}
    </li>
  );
};

const BreadCrumb = ({ children }: BreadCrumbProps) => {
  return (
    <ul className="hideSB flex w-full items-center overflow-hidden overflow-x-auto">
      {children}
    </ul>
  );
};

BreadCrumb.BreadCrumbItem = BreadCrumbItem;
export default BreadCrumb;
export { BreadCrumbItem };
