"use client";
import React, { useState, useRef, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

// types
type ImageSliderProps = {
  images: { _id: number; picture: string }[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
  // slides state
  const [active, setActive] = useState(0);
  // ref
  const swiperRef = useRef<any | null>(null);

  // change slide when clicked on a image of slide
  useEffect(() => {
    swiperRef.current!.swiper.slideTo(active);
  }, [active, swiperRef]);

  // change active state
  const handleSlideChange = (activeIndex: number) => {
    setActive(activeIndex);
  };

  return (
    <>
      <div className="relative h-full">
        <div>
          <Swiper
            onActiveIndexChange={(swiper) =>
              handleSlideChange(swiper.activeIndex)
            }
            modules={[Pagination, Thumbs]}
            ref={swiperRef}
          >
            {images.map(
              (image: { _id: number; picture: string }) => (
                <SwiperSlide key={uuidv4()}>
                  <Image
                    src={image.picture}
                    alt="Image"
                    width={1200}
                    height={200}
                    priority={true}
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className="absolute bottom-0 left-0 z-50 flex w-full items-center justify-center gap-5 p-3">
            {images.map(
              (image: { _id: number; picture: string }, index: number) => (
                <button
                  key={uuidv4()}
                  onClick={() => handleSlideChange(index)}
                  className={`overflow-hidden rounded-8 ${
                    active === index && "border-2"
                  }`}
                >
                  <Image
                    src={image.picture}
                    alt="Image"
                    width={100}
                    height={100}
                    priority={true}
                    className="h-full w-full"
                  />
                </button>
              )
            )}
            <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-12 w-full bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
