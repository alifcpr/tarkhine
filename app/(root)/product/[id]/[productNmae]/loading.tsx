import React from "react";

const Loading = () => {
  return (
    <div className="relative mb-4 grid grid-cols-12 gap-4  px-4 xl:px-14 2xl:px-28">
      <div className="col-span-12 h-[37px] animate-skeleton_loading rounded-8 md:h-[40px]"></div>
      <div className="col-span-12 rounded-8 lg:col-span-9 xl:col-span-8 2xl:gap-y-28">
        <div className="col-span-12 h-[359px] animate-skeleton_loading rounded-8 md:h-[594px] 2xl:h-[754px]"></div>
        <div className="col-span-12 mt-4 h-[105px] animate-skeleton_loading rounded-8 md:h-[82px] 2xl:h-[88px]"></div>
        <div className="col-span-12 mt-4 h-[243px] animate-skeleton_loading rounded-8 md:h-[246px] 2xl:h-[252px]"></div>
        <div className="col-span-12 mt-4 h-[335px] animate-skeleton_loading rounded-8 "></div>
      </div>
      <div className="relative col-span-12 md:w-full lg:col-span-3 xl:col-span-4">
        <div className="sticky left-0 top-2 h-[83px] w-full animate-skeleton_loading rounded-8"></div>
      </div>
    </div>
  );
};

export default Loading;
