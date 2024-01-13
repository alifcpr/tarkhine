"use client";
import { BranchParams } from "@/types/type.d";
import { Gallery } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ImageSlider from "../shared/ImageSlider";
import Modal from "../shared/Modal";

type ContactCardProps = {
  branchData: BranchParams;
};

const ContactCard = ({ branchData }: ContactCardProps) => {
  const [open, setOpen] = useState<boolean>(false);
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
          <ImageSlider images={branchData.slideImages} />
        </Modal.Body>
      </Modal>

      <div className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-8 border md:flex-row xl:hover:shadow-lg">
        <div className="relative h-48 w-full md:min-h-full md:max-w-[300px] lg:max-w-sm xl:h-56 xl:max-w-xl">
          <button
            onClick={() => setOpen(true)}
            className="xl:smooth-transition group h-full w-full xl:absolute xl:inset-0 xl:z-[9] xl:flex xl:items-center xl:justify-center xl:bg-black/0 xl:group-hover:bg-black/70"
          >
            <Gallery className="h-14 w-14 rounded-full bg-muted-500/50 p-2 text-muted-100 opacity-0 ring-8 ring-muted-500/30 group-hover:opacity-100" />
          </button>
          <Image
            src={branchData.thumbnail}
            fill
            sizes="(max-width: 391px) 40vw, (max-width: 770px) 60vw, (min-width: 1025px): 100vw"
            alt={branchData.title}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="xl:smooth-transition flex w-full flex-col items-center px-3 will-change-transform md:justify-center xl:translate-y-5 xl:group-hover:translate-y-0">
          <h1 className="body-md md:body-xl lg:h7-semibold my-2">
            {branchData.title}
          </h1>
          <p className="caption-md md:body-sm lg:body-md whitespace-nowrap text-muted-800">
            {branchData.address}
          </p>
          <div className="caption-md md:body-sm lg:body-md mt-1 flex items-center justify-between gap-x-3 text-muted-800 md:mt-2 ">
            <div className="flex items-center">
              <p>شماره تماس 1:</p>
              <span>{branchData.phoneOne}</span>
            </div>
            <div className="flex items-center">
              <p>شماره تماس 2:</p>
              <span>{branchData.phoneTwo}</span>
            </div>
          </div>
          <div className="caption-md md:body-sm lg:body-md mt-1 flex items-center text-muted-800 md:mt-2">
            <p>ساعت کاری:</p>
            <span>{branchData.workTime}</span>
          </div>
          <Link
            href={branchData.href}
            className="button-outline-primary caption-md md:body-sm lg:body-md my-3 flex w-full items-center justify-center py-1 xl:w-1/2 xl:opacity-0 xl:group-hover:opacity-100"
          >
            صفحه شعبه
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
