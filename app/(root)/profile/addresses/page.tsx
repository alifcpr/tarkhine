/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { AddCircle, ArrowRight2 } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import { MenuState } from "../layout";
import Empty from "@/components/profile/Empty";
import Modal from "@/components/shared/Modal";
import AddAddressForm from "@/components/forms/AddAddressForm";
import { useRouter } from "next/navigation";
import AddressCard from "@/components/cards/AddressCard";

const Page = () => {
  const test = useContext(MenuState);
  const router = useRouter();

  const backToProfile = () => {
    router.push("/profile");
    test?.setIsMenuOpen(false);
  };

  useEffect(() => {
    const onPageLoad = () => {
      test?.setIsMenuOpen(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const length = 1;

  return (
    <>
      <Modal
        containerClasses="!block md:!flex"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Modal.Header
          titleClass="h7-semibold"
          containerClass="!bg-muted-400 px-5 py-4"
          onClose={() => setIsModalOpen(false)}
        >
          ثبت آدرس
        </Modal.Header>
        <Modal.Body containerClass="p-3 bg-muted-100">
          <AddAddressForm />
        </Modal.Body>
      </Modal>

      <div className="h-full">
        <div className="flex items-center justify-between p-3 font-estedad md:border-b">
          <button onClick={backToProfile}>
            <ArrowRight2 className="h-10 w-10 md:hidden" />{" "}
          </button>
          <h1 className="h5-bold  md:w-full">آدرس ها</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden text-primary-800 md:flex md:items-center md:gap-x-2"
          >
            <AddCircle />
            <span className="whitespace-nowrap">افزودن آدرس جدید</span>
          </button>
        </div>
        {length > 0 ? (
          <div className="my-5 flex flex-wrap justify-between gap-2">
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
          </div>
        ) : (
          <div className="flex h-full w-full flex-wrap items-center justify-center">
            <Empty
              btnLabel={"افزودن آدرس"}
              title={"شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"}
              setOpenModal={setIsModalOpen}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
