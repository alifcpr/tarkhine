"use client";
import ProfileTab from "@/components/profile/ProfileTab";
import useUser from "@/hooks/useUser";
import ProfileMenuStateProvider from "@/providers/ProfileMenuStateProvider";
import { ReactNode } from "react";
import Loading from "./loading";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { data, isLoading } = useUser();
  if (isLoading) return <Loading />;

  if (data)
    return (
      <ProfileMenuStateProvider>
        <div className="relative mx-4 mb-10 grid grid-cols-12 gap-x-4 xl:mx-14 2xl:mx-28">
          <ProfileTab />
          <div className="col-span-12 min-h-[480px] rounded-8 px-3 md:col-span-8 md:border xl:col-span-9 2xl:col-span-10">
            {children}
          </div>
        </div>
      </ProfileMenuStateProvider>
    );
};

export default Layout;
