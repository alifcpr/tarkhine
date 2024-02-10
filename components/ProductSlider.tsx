"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

type ProductSliderProps = {
  images: string[];
};

const ProductSlider = ({ images }: ProductSliderProps) => {
  // active slide index
  const [active, setActive] = useState<number>(0);

  // swiper ref
  const swiperRef = useRef<any | null>(null);

  // change active state
  const handleSlideChange = (activeIndex: number) => {
    setActive(activeIndex);
  };

  // change slide when clicked on a image of slide
  useEffect(() => {
    swiperRef.current!.swiper.slideTo(active);
  }, [active, swiperRef]);

  return (
    <>
      <div className="max-h-[550px] overflow-hidden rounded-8 bg-red-500">
        <Swiper
          slidesPerView={1}
          autoplay
          onActiveIndexChange={(swiper) =>
            handleSlideChange(swiper.activeIndex)
          }
          modules={[Navigation, Pagination]}
          ref={swiperRef}
          loop={true}
          grabCursor
        >
          {images.map((image: string) => (
            <SwiperSlide key={image}>
              <div className="relative h-[200px] w-full md:h-[400px] 2xl:h-[550px]">
                <Image
                  fill
                  sizes="100vw"
                  className="h-full w-full"
                  alt={"تصویر غذا"}
                  src={image}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-4 flex items-center justify-center gap-x-4 md:justify-start">
        {images.map((image: string, index: number) => (
          <div
            key={image}
            onClick={() => handleSlideChange(index)}
            className={`smooth-transition relative h-20 w-32 cursor-pointer overflow-hidden rounded-4 bg-black ring-primary-800 ring-offset-2 hover:ring-2 md:h-28 md:w-48 ${
              active === index && "border-primary-800 ring-2"
            }`}
          >
            <Image
              src={image}
              fill
              sizes="100vw"
              alt="تصویر غذا"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductSlider;
