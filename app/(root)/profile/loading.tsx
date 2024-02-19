"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="mx-4 mb-10 grid grid-cols-12 gap-x-3 xl:mx-28">
      <div className="col-span-12 rounded-4 md:col-span-4 md:h-[300px] md:animate-skeleton_loading xl:col-span-3 2xl:col-span-2">
        <div className="md:hidden">
          <div className="flex items-center gap-x-3 border-b py-4">
            <div className="h-20 w-20 animate-skeleton_loading rounded-64"></div>
            <div className="flex h-12 flex-col justify-between">
              <div className="h-4 w-32 animate-skeleton_loading rounded-4"></div>
              <div className="h-4 w-32 animate-skeleton_loading rounded-4"></div>
            </div>
          </div>
          <div className="mt-5 flex min-h-[450px] flex-col gap-y-4">
            <div className="h-7 w-full animate-skeleton_loading rounded-4"></div>
            <div className="h-7 w-full animate-skeleton_loading rounded-4"></div>
            <div className="h-7 w-full animate-skeleton_loading rounded-4"></div>
            <div className="h-7 w-full animate-skeleton_loading rounded-4"></div>
            <div className="h-7 w-full animate-skeleton_loading rounded-4"></div>
          </div>
        </div>
      </div>
      <div className="hidden rounded-4 md:col-span-8 md:block md:h-[480px] md:animate-skeleton_loading xl:col-span-9 2xl:col-span-10"></div>
    </div>
  );
};

export default Loading;
