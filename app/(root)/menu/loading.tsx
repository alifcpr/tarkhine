import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="h-[200px] w-full animate-skeleton_loading lg:h-[250px] xl:h-[336px]"></div>
      <div className="mt-1 h-[56px] w-full animate-skeleton_loading md:h-[61px] lg:h-[64px]"></div>
      <div className="px-5 2xl:px-10">
        <div className="flex flex-col items-center md:flex-row md:gap-x-3">
          <div className="hideSB my-3 flex w-full items-center gap-x-2 overflow-hidden">
            <div className="h-[29px] w-[112px] animate-skeleton_loading rounded-4 md:h-[32px]"></div>
            <div className="h-[29px] w-[112px] animate-skeleton_loading rounded-4 md:h-[32px]"></div>
            <div className="h-[29px] w-[112px] animate-skeleton_loading rounded-4 md:h-[32px]"></div>
            <div className="h-[29px] w-[112px] animate-skeleton_loading rounded-4 md:h-[32px]"></div>
          </div>
          <div className="h-[44px] w-full animate-skeleton_loading rounded-4 md:h-[34px] md:w-1/2 lg:w-1/3"></div>
        </div>

        <div className="mt-10">
          <div className="h-[30px] w-[100px] animate-skeleton_loading rounded-4"></div>
          <div className="mt-4 grid grid-cols-12 gap-4">
            <div className="col-span-12 h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 hidden h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 md:block lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 hidden h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 md:block lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 hidden h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 md:block lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
          </div>
        </div>
        <div className="mt-10">
          <div className="h-[30px] w-[100px] animate-skeleton_loading rounded-4"></div>
          <div className="mt-4 grid grid-cols-12 gap-4">
            <div className="col-span-12 h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 hidden h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 md:block lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 hidden h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 md:block lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
            <div className="col-span-12 hidden h-[133px] animate-skeleton_loading rounded-4 md:col-span-6 md:block lg:h-[139px] xl:col-span-4 xl:h-[187px]"></div>
          </div>
        </div>
      </div>

      <div className=" mt-10 h-[219px] animate-skeleton_loading md:h-[229px] lg:h-[285px]  xl:h-[394px]"></div>
    </div>
  );
};

export default Loading;
