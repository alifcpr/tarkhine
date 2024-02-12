import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="h-[200px] w-full animate-skeleton_loading lg:h-[250px] xl:h-[336px]"></div>
      <div className="px-5">
        <div className="mt-5 h-[44px] w-full animate-skeleton_loading rounded-8 md:hidden"></div>
      </div>
      <div className="mt-8">
        <div className="mx-auto h-[30px] w-[120px] animate-skeleton_loading rounded-4"></div>
      </div>
      <div className="mt-5 grid grid-cols-12 gap-5 px-5 md:px-8 xl:gap-10 xl:px-14 2xl:px-28">
        <div className="col-span-6 h-[106px] animate-skeleton_loading rounded-4 md:h-[120px] lg:col-span-3 lg:h-[176px]"></div>
        <div className="col-span-6 h-[106px] animate-skeleton_loading rounded-4 md:h-[120px] lg:col-span-3 lg:h-[176px]"></div>
        <div className="col-span-6 h-[106px] animate-skeleton_loading rounded-4 md:h-[120px] lg:col-span-3 lg:h-[176px]"></div>
        <div className="col-span-6 h-[106px] animate-skeleton_loading rounded-4 md:h-[120px] lg:col-span-3 lg:h-[176px]"></div>
      </div>
      <div className="mt-10 h-[420px] w-full animate-skeleton_loading md:h-[300px] lg:h-[264px] xl:h-[372px] 2xl:h-[312px]"></div>
      <div className="mt-10">
        <div className="mx-auto h-[30px] w-[120px] animate-skeleton_loading rounded-4"></div>
      </div>
      <div className="mt-5 grid grid-cols-12 gap-3 px-5 md:mt-7 md:gap-7 md:px-8 xl:gap-10 xl:px-14 2xl:gap-10 2xl:px-28">
        <div className="col-span-12 h-[80px] animate-skeleton_loading rounded-4 md:col-span-6 md:h-[276px] lg:col-span-3 lg:h-[226px] 2xl:h-[350px]"></div>
        <div className="col-span-12 h-[80px] animate-skeleton_loading rounded-4 md:col-span-6 md:h-[276px] lg:col-span-3 lg:h-[226px] 2xl:h-[350px]"></div>
        <div className="col-span-12 h-[80px] animate-skeleton_loading rounded-4 md:col-span-6 md:h-[276px] lg:col-span-3 lg:h-[226px] 2xl:h-[350px]"></div>
        <div className="col-span-12 h-[80px] animate-skeleton_loading rounded-4 md:col-span-6 md:h-[276px] lg:col-span-3 lg:h-[226px] 2xl:h-[350px]"></div>
      </div>
      <div className="mt-10 h-[219px] animate-skeleton_loading md:h-[229px] lg:h-[285px] xl:h-[394px]"></div>
    </div>
  );
};

export default Loading;
