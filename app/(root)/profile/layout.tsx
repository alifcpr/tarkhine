"use client";

import ProfileTab from "@/components/profile/ProfileTab";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type MenuStateParams = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MenuState = createContext<MenuStateParams | null>(null);

const Layout = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative mx-4 grid grid-cols-12 gap-x-4 xl:mx-28">
      <ProfileTab isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="col-span-12 min-h-[373px] rounded-8 px-3 md:col-span-10 md:border">
        <MenuState.Provider value={{ isMenuOpen, setIsMenuOpen }}>
          {children}
        </MenuState.Provider>
      </div>
    </div>
  );
};

export default Layout;
