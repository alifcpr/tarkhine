"use client";
import { BranchParams } from "@/types/type.d";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft2, Gallery } from "iconsax-react";
import Link from "next/link";
import Modal from "../shared/Modal";
import ImageSlider from "../shared/ImageSlider";

const BranchCard = ({
  _id,
  address,
  href,
  slideImages,
  thumbnail,
  title,
}: BranchParams) => {
  // modal state
  const [open, setOpen] = useState(false);

  // To close the modal when it is clicked outside the modal
  const openModalHandler = () => {
    setOpen(true);
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header
          containerClass="absolute z-50 !bg-transparent !justify-end"
          titleClass="hidden"
          iconClass="text-white !w-10 !h-10 m-4 md:!w-12 md:!h-12"
          onClose={() => setOpen(false)}
        />
        <Modal.Body containerClass="rounded-8 overflow-hidden max-w-sm md:max-w-2xl lg:max-w-4xl overflow-hidden h-[335px] md:h-[450px] lg:h-[500px]">
          <ImageSlider images={slideImages} />
        </Modal.Body>
      </Modal>

      <div className="smooth-transition group col-span-12 flex min-h-full flex-row overflow-hidden rounded-8 border hover:border-primary-800 md:col-span-6 md:flex-col lg:col-span-3 xl:border-2 xl:hover:border-muted-500 xl:hover:shadow-md">
        <button
          onClick={openModalHandler}
          className="smooth-transition relative h-20 w-2/3 object-cover md:h-52 md:w-full xl:h-56 xl:group-hover:h-48"
        >
          <Image
            src={thumbnail}
            alt={title}
            width={300}
            height={300}
            priority={true}
            className="h-full w-full"
          />
          <div className="xl:smooth-transition hidden xl:absolute xl:inset-0 xl:flex xl:items-center xl:justify-center xl:bg-black/0 xl:group-hover:bg-black/60">
            <Gallery className="h-14 w-14 rounded-full bg-muted-500/50 p-2 text-muted-100 opacity-0 ring-8 ring-muted-500/30 group-hover:opacity-100" />
          </div>
        </button>
        <div className=" flex h-full w-full flex-col items-center justify-center px-2 py-1 md:px-1 xl:justify-start xl:group-hover:justify-between">
          <Link
            href={href}
            className="button-md md:button-lg xl:h5-bold py-1 md:py-2 lg:py-1 xl:py-3"
          >
            {title}
          </Link>
          <Link href={href} className="caption-md xl:overline-lg text-center">
            {address}
          </Link>
          <Link
            href={href}
            className="button-lg smooth-transition my-2 hidden items-center justify-between rounded-8 border border-primary-800 px-3 py-1 text-primary-800 hover:bg-primary-800 hover:text-muted-100 group-hover:pointer-events-auto xl:pointer-events-none xl:flex xl:opacity-0 xl:group-hover:opacity-100"
          >
            <span>صفحه شعبه</span>
            <ArrowLeft2 className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BranchCard;
