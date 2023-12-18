"use client";
import { bannerSliderItems } from "@/constants";
import { BannerSliderItems } from "@/types/type.d";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const BannerSlider = () => {
  return (
    <>
      <div className="relative">
        <div className="banner-slider relative h-[200px] lg:h-[250px] xl:h-[336px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            modules={[Pagination, Navigation]}
            navigation
            pagination={{
              el: "#containerForBullets",
              bulletClass: "swiper-pagination-custome",
              bulletActiveClass: "swiper-active-pagination-custome",
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class=${className}></span>`;
              },
            }}
            className="h-full"
          >
            {bannerSliderItems.map(
              (banner: BannerSliderItems, index: number) => (
                <SwiperSlide key={index}>
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={banner.picture}
                      width={1920}
                      height={400}
                      alt={banner.title}
                      className="aspect-square h-full w-full object-cover"
                    />
                    <div className="image-wrapper absolute inset-0"></div>
                    <div className="absolute flex flex-col items-center gap-4 md:gap-5 lg:gap-10">
                      <h1 className="h6-bold md:h4-bold lg:h3-bold xl:h2-bold text-muted-100">
                        {banner.title}
                      </h1>
                      <Link
                        href={banner.href}
                        className="caption-sm md:caption-md lg:button-lg rounded-4 bg-primary-800 px-3 py-1 text-muted-100 hover:bg-primary-900 md:px-5  lg:px-9"
                      >
                        {banner.buttonText}
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        <div className="pointer-events-none absolute -bottom-1 left-0 z-50 flex h-max w-full items-center justify-center ">
          <div className="flex w-max items-center">
            <div>
              <svg
                width="26"
                height="33"
                viewBox="0 0 26 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 33H25.5C20.7 32.2 16.1667 20.3333 14.5 14.5C12.1 4.1 3.83333 0.5 0 0V33Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              id="containerForBullets"
              className="pointer-events-auto flex w-max items-center gap-x-3 bg-muted-100  px-2 py-[11px]"
            ></div>
            <div className="-scale-x-100">
              <svg
                width="26"
                height="33"
                viewBox="0 0 26 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 33H25.5C20.7 32.2 16.1667 20.3333 14.5 14.5C12.1 4.1 3.83333 0.5 0 0V33Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
