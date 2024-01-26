import FoodFilter from "@/components/filters/FoodFilter";
import SubFilterFood from "@/components/filters/SubFilterFood";
import BannerSlider from "@/components/shared/BannerSlider";
import Search from "@/components/shared/filters/Search";
import React from "react";

const Page = () => {
  return (
    <>
      <BannerSlider />
      <div className="mb-3 flex items-center gap-x-3 bg-muted-400 px-5 md:px-8 lg:px-11 xl:px-14">
        <FoodFilter
          buttonClasses="py-4 body-md text-muted-800 md:body-lg lg:body-xl ml-4 xl:ml-8"
          activeClasses="body-lg border-b-2 border-primary-800 text-primary-800 lg:!font-bold"
        />
      </div>
      <div className="mb-12 flex flex-col items-center justify-between gap-y-3 px-5 md:flex-row md:gap-x-5 md:px-8 lg:px-11 xl:px-14">
        <SubFilterFood />
        <Search
          mode="Write"
          query="q"
          containerClasses="w-full !py-2 md:w-1/2 lg:w-1/3"
        />
      </div>
    </>
  );
};

export default Page;
