import ProfileTab from "@/components/profile/ProfileTab";
import ProfileMenuStateProvider from "@/providers/ProfileMenuStateProvider";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = async ({ children }: LayoutProps) => {

  return (
    <ProfileMenuStateProvider>
      <div className="relative mx-4 grid grid-cols-12 gap-x-4 xl:mx-28">
        <ProfileTab />
        <div className="col-span-12 min-h-[480px] rounded-8 px-3 md:col-span-8 md:border xl:col-span-10">
          {children}
        </div>
      </div>
    </ProfileMenuStateProvider>
  );
};

export default Layout;
