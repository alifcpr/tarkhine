"use client";
import { Add } from "iconsax-react";
import Image from "next/image";
import useClickOutside from "../../hooks/useClickOutside";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// types
type DrawerProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

type DrawerTopFrameProps = {
  onClose: () => void;
};

const DrawerTopFrame = ({ onClose }: DrawerTopFrameProps) => {
  return (
    <div className="relative h-28 bg-red-500">
      <Image
        src={"/assets/images/Drawer-topFrame.png"}
        priority
        alt="Drawer Top Frame"
        className="h-full w-full object-cover"
        width={200}
        height={100}
      />
      <button onClick={onClose}>
        <Add className="absolute left-2 top-2 h-8 w-8 rotate-45 text-muted-100" />
      </button>
      <Image
        src={"/assets/images/Logo-White.png"}
        alt="Logo"
        width={100}
        height={100}
        className="absolute right-3 top-5"
      />
    </div>
  );
};

const Drawer = ({ children, open, onClose }: DrawerProps) => {
  // state
  const [isClient, setIsClient] = useState(false);

  // To close the drawer when it is clicked outside the drawer
  const ref = useClickOutside(onClose);

  // hooks
  useEffect(() => {
    setIsClient(true);
  }, []);

  // deactive scroll when modal is open
  useEffect(() => {
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "visible";
  }, [open]);

  if (typeof window === "object" && isClient) {
    return createPortal(
      <div
        className={`smooth-transition fixed inset-0 z-50 backdrop-blur-sm lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <aside
          ref={ref}
          className={`smooth-transition absolute top-0 h-full w-2/3 bg-muted-100 shadow-md md:w-1/3  ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <DrawerTopFrame onClose={onClose} />
          <div>{children}</div>
        </aside>
      </div>,
      document.body
    );
  }
};

export default Drawer;
