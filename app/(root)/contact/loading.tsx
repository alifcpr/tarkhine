import React from "react";

const Loading = () => {
  return (
    <>
      <div className="h-[200px] w-full animate-skeleton_loading lg:h-[250px] xl:h-[336px]"></div>
      <div className="my-10 grid grid-cols-12 gap-4 px-6 xl:px-10 2xl:px-28">
        <div className="col-span-12 h-[348px] animate-skeleton_loading rounded-8 md:h-[192px] xl:h-[224px] 2xl:h-[226px]"></div>
        <div className="col-span-12 h-[348px] animate-skeleton_loading rounded-8 md:h-[192px] xl:h-[224px] 2xl:h-[226px]"></div>
        <div className="col-span-12 h-[348px] animate-skeleton_loading rounded-8 md:h-[192px] xl:h-[224px] 2xl:h-[226px]"></div>
        <div className="col-span-12 h-[348px] animate-skeleton_loading rounded-8 md:h-[192px] xl:h-[224px] 2xl:h-[226px]"></div>
      </div>
      <div className=" h-[219px] animate-skeleton_loading md:h-[229px] lg:h-[285px]  xl:h-[394px]"></div>
    </>
  );
};

export default Loading;
