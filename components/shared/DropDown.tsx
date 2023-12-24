"use client";
import { Heart, Location, LogoutCurve, User, Wallet2 } from "iconsax-react";
import Link from "next/link";
import { useCallback } from "react";

// types
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
  // Icon rendering based on button type
  const renderIcon = useCallback((type: string) => {
    switch (type) {
      case "profile":
        return <User className="h-5 w-5 text-black" />;

      case "orders":
        return <Wallet2 className="h-5 w-5 text-black" />;

      case "favorite":
        return <Heart className="h-5 w-5 text-black" />;

      case "addresses":
        return <Location className="h-5 w-5 text-black" />;

      case "logout":
        return <LogoutCurve className="h-5 w-5 text-black" />;
    }
  }, []);

  // handle clickable buttons
  const handleClick = (type: string) => {
    if (type === "logout") {
      console.log("logout");
    }
  };

  return (
    <div className={`absolute z-50 ${containerClasses}`}>
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
                  {item.icon && renderIcon(item.value)}
                  {item.title}
                </Link>
              </>
            ) : (
              <span
                className="flex gap-x-3"
                onClick={() => handleClick(item.type)}
              >
                {/* item is not link */}
                {item.icon && renderIcon(item.value)}
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
