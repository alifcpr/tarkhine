"use client";
import React, { useState } from "react";
import { HambergerMenu } from "iconsax-react";
import Darwer from "./Darwer";

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <HambergerMenu className="h-8 w-8 text-primary-800" />
      </button>
      <Darwer open={open} onClose={() => setOpen(false)}>
        Hi
      </Darwer>
    </div>
  );
};

export default MobileNav;
