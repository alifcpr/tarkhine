"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type DropDownProps = {
  containerClasses?: string;
  ulClasses?: string;
  content: { _id: number; title: string }[];
  textClasses?: string;
};

const DropDown = ({
  containerClasses,
  content,
  ulClasses,
  textClasses,
}: DropDownProps) => {

    
  const handleClick = (type: string) => {
    if (type === "logout") {
      console.log("logout");
    }
  };

  return (
    <div className={`absolute ${containerClasses}`}>
      <ul className={` rounded-8  shadow-md ${ulClasses}`}>
        {content.map((item: any, index: number) => (
          <li
            className={`body-md cursor-pointer  bg-muted-100 p-2 hover:bg-primary-100  ${textClasses}`}
            key={index}
          >
            {item.type === "link" ? (
              <>
                {/* item is link */}
                <Link
                  className="flex w-full items-center gap-x-3 text-start"
                  href={item.href}
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  )}
                  {item.title}
                </Link>
              </>
            ) : (
              <span
                className="flex gap-x-3"
                onClick={() => handleClick(item.type)}
              >
                {/* item is not link */}
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                  />
                )}
                <p>{item.title}</p>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
