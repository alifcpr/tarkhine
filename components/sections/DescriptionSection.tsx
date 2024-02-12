"use client";
import React, { useEffect, useRef, useState } from "react";

type DescriptionSectionProps = {
  description: string;
};

const DescriptionSection = ({ description }: DescriptionSectionProps) => {
  // states
  const [height, setHeight] = useState<string>("12rem");
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const contentRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const contentBox = contentRef.current!;

    // if (contentBox.scrollHeight > 20) {
    //   setHeight("12rem");
    //   setShow(false);
    // } else {
    //   setHeight("100%");
    //   setShow(true);
    // }
    if (contentBox.scrollHeight < 30) {
      setShowBtn(false);
      setHeight("auto");
    } else if (contentBox.scrollHeight > 30) {
      setShowBtn(true);
      setHeight("12rem");
      setShowMore(false);
    } else {
      setShowBtn(true);
      setHeight("100%");
      setShowMore(true);
    }
  }, []);

  useEffect(() => {
    console.log(contentRef.current!.scrollHeight);
  }, [contentRef.current?.scrollHeight]);

  // handle show more item
  const handleShowMore = () => {
    setHeight("100%");
    setShowMore(true);
  };

  // handle show less item
  const handleShowLess = () => {
    setHeight("12rem");
    setShowMore(false);
  };

  return (
    <div className="relative">
      <h1 className="body-lg md:body-xl xl:h4-bold">توضیحات</h1>
      <p
        ref={contentRef}
        style={{ maxHeight: height, overflow: "hidden" }}
        className="body-sm md:body-lg mt-2 text-justify"
      >
        {description}
      </p>

      {showBtn &&
        (showMore ? (
          <div className="flex items-center justify-center">
            <button
              onClick={handleShowLess}
              className="body-md md:body-xl rounded-4 px-5 py-1 !font-bold text-primary-800"
            >
              بستن
            </button>
          </div>
        ) : (
          <div className="absolute bottom-0 left-0 flex h-1/2 w-full items-end justify-center bg-gradient-to-t from-muted-200 to-transparent">
            <button
              onClick={handleShowMore}
              className="body-md md:body-xl rounded-4 px-5 py-1 !font-bold text-primary-800"
            >
              بیشتر
            </button>
          </div>
        ))}
    </div>
  );
};

export default DescriptionSection;
