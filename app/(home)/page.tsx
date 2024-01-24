import BranchCard from "@/components/cards/BranchCard";
import CategoryCard from "@/components/cards/CategoryCard";
import BannerSlider from "@/components/shared/BannerSlider";
import Search from "@/components/shared/filters/Search";
import { branchList, categoryItems } from "@/constants";
import { BranchParams, CategoryItems } from "@/types/type.d";
import { Diagram, HomeWifi, MenuBoard, User } from "iconsax-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ترخینه | صفحه اصلی",
};

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <div className="px-5">
        <Search
          containerClasses="mx-auto mt-5 border !py-2 max-md:flex md:hidden"
          iconClasses="w-6 h-6"
          mode="Enter"
        />
      </div>
      <div className="m-4 mx-auto w-1/2"></div>
      <section className="mt-10 flex flex-col gap-y-14 px-4 md:gap-y-16 lg:gap-y-20 xl:gap-y-28">
        <h1 className="h5-bold  lg:h4-bold text-center">منوی رستوران</h1>
        <div className="mx-4 grid grid-cols-12 gap-x-4 gap-y-20 md:gap-x-10 md:gap-y-24  xl:mx-28">
          {categoryItems.map((category: CategoryItems, index: number) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </section>
      <section className="relative mt-10 flex flex-col gap-y-9 bg-black/60 bg-[url(/assets/images/restaurant-environment.jpg)] bg-cover bg-center px-5 py-10 bg-blend-darken  md:mt-16 md:flex-row xl:px-28">
        <div className="w-full ">
          <h1 className="overline-lg xl:h4-bold mb-2 text-start text-muted-100 md:text-start">
            رستوران‌های زنجیره‌ای ترخینه
          </h1>
          <div className="flex w-full flex-col items-end  md:w-5/6 md:items-center md:justify-center md:text-justify lg:w-2/3 lg:items-end">
            <p className="caption-md  xl:body-xl my-2 text-white md:text-center lg:text-justify xl:text-justify">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
            <button className="caption-md xl:button-lg smooth-transition mt-2 rounded-4 border-2  border-muted-100 px-8 py-2 text-muted-100 hover:bg-muted-100 hover:text-black">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
        <div className="flex  flex-1 items-center justify-center">
          <div className="flex h-full w-full flex-wrap items-center gap-y-7 md:w-max">
            <div className="flex w-1/2 flex-col items-center gap-y-1">
              <User className="h-6 w-6  text-muted-100 md:h-7 md:w-7 xl:h-12 xl:w-12" />
              <p className="caption-md md:body-sm xl:body-lg text-muted-100">
                پرسنلی مجرب و حرفه‌ای
              </p>
            </div>
            <div className="flex w-1/2 flex-col items-center gap-y-1">
              <Diagram className="h-6 w-6  text-muted-100 md:h-7 md:w-7 xl:h-12 xl:w-12" />
              <p className="caption-md md:body-sm xl:body-lg text-muted-100">
                کیفیت بالای غذاها
              </p>
            </div>
            <div className="flex w-1/2 flex-col items-center gap-y-1">
              <HomeWifi className="h-6 w-6  text-muted-100 md:h-7 md:w-7 xl:h-12 xl:w-12" />
              <p className="caption-md md:body-sm xl:body-lg text-muted-100">
                محیطی دلنشین و آرام
              </p>
            </div>
            <div className="flex w-1/2 flex-col items-center gap-y-1">
              <MenuBoard className="h-6 w-6  text-muted-100 md:h-6 md:w-6 xl:h-12 xl:w-12" />
              <p className="caption-md md:body-sm xl:body-lg text-muted-100">
                منوی متنوع
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-14">
        <h1 className="h5-bold lg:h4-bold mb-7 mt-12 text-center">
          ترخینه گردی
        </h1>
        <div className="mx-4 grid grid-cols-12 gap-3 max-xl:h-max md:gap-6 xl:mx-28 xl:h-[350px] xl:gap-10">
          {branchList.map((branch: BranchParams, index: number) => (
            <BranchCard key={index} {...branch} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
