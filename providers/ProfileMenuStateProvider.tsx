import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
} from "react";

type MenuStateParams = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuState = createContext<MenuStateParams | null>(null);

type MenuStateProviderProps = {
  children: ReactNode;
};

const ProfileMenuStateProvider = ({ children }: MenuStateProviderProps) => {
  // menu state
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <MenuState.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuState.Provider>
  );
};

const useMenu = () => {
  // for using setMenuIsOpen and isMenuOpen
  const menuContext = useContext(MenuState);
  if (!menuContext)
    throw new Error("You need to use this context inside a provider");
  return menuContext;
};

export { useMenu };
export default ProfileMenuStateProvider;
