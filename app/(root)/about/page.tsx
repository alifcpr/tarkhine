import PageHeader from "@/components/shared/PageHeader";
import { aboutItems } from "@/constants";
import { AboutItems } from "@/types/type.d";
import { Chart2, Home, MenuBoard, User } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ی ما",
};

const About = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "user":
        return (
          <User className="h-4 w-4 text-muted-950 md:h-6 md:w-6 xl:h-12 xl:w-12" />
        );
      case "chart":
        return (
          <Chart2 className="h-4 w-4 text-muted-950 md:h-6 md:w-6 xl:h-12 xl:w-12" />
        );
      case "home":
        return (
          <Home className="h-4 w-4 text-muted-950 md:h-6 md:w-6 xl:h-12 xl:w-12" />
        );
      case "menu":
        return (
          <MenuBoard className="h-4 w-4 text-muted-950 md:h-6 md:w-6 xl:h-12 xl:w-12" />
        );
    }
  };

  return (
    <>
      <PageHeader
        title="درباره ترخینه بیشتر بدانید !"
        imageSrc="/assets/images/about-image.png"
      />
      <div className="mx-auto px-5 xl:max-w-[1630px] xl:px-28">
        <h1 className="h6-bold md:h4-bold my-2 md:my-3 xl:my-5">درباره ما</h1>
        <div className="mx-auto flex flex-col gap-y-3 max-xl:gap-x-4 md:flex-row xl:justify-evenly xl:gap-x-16">
          <div className="caption-sm md:caption-lg lg:body-xl w-full text-muted-800 xl:w-5/12">
            <p>
              رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
              این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع
              در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها
              اولیت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش
              بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه
              داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را
              ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده که بسیار شیک و
              مدرن می‌باشند و برای
            </p>
            <p>
              برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با
              کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه
              راه پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه
              سرویس به شما عزیزان می‌باشند.
            </p>
            <p>
              چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و
              آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن
              روز که همه ایرانیان سالم و سلامت باشند.
            </p>
          </div>
          <div className="relative w-full overflow-hidden max-sm:h-[300px] md:min-h-full xl:w-3/5">
            <Image
              src={"/assets/images/about-image-2.png"}
              fill
              sizes="100vw"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-y-4 bg-muted-400 py-5 md:flex-nowrap xl:mt-14 xl:px-28 xl:py-12">
        {aboutItems.map((item: AboutItems, index: number) => (
          <div
            className="caption-md md:body-md lg:body-lg flex w-1/2 flex-col items-center border-muted-500 text-muted-800 max-sm:border-none md:w-auto md:grow  md:border-r-2 md:first:border-none"
            key={index}
          >
            {renderIcon(item.icon)}
            <span className="mt-3">{item.text}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
