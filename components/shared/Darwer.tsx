import { Add } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { createPortal } from "react-dom";

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
    <div className="relative">
      <Image
        src={"/assets/images/Drawer-topFrame.png"}
        alt="Drawer Top Frame"
        className="w-full"
        width={300}
        height={94}
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

const Darwer = ({ children, open, onClose }: DrawerProps) => {
  return createPortal(
    <div
      className={`smooth-transition fixed inset-0 z-50 backdrop-blur-sm lg:hidden ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`smooth-transition absolute right-0 top-0 h-full w-2/3 bg-muted-100 shadow-md md:w-1/3  ${
          open ? "right-0" : "-right-full"
        }`}
      >
        <DrawerTopFrame onClose={onClose} />
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Darwer;
