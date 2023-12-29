"use client";
import { AddCircle, ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { MenuState } from "../layout";
import Empty from "@/components/profile/Empty";
import Modal from "@/components/shared/Modal";
import AddAddressForm from "@/components/forms/AddAddressForm";

const Page = () => {
  const test = useContext(MenuState);
  const router = useRouter();

  const backToProfile = () => {
    router.push("/profile");
    test?.setIsMenuOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
        <div className="flex h-full w-full items-center justify-center">
          <Empty
            btnLabel={"افزودن آدرس"}
            title={"شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"}
            setOpenModal={setIsModalOpen}
          />
        </div>
      </div>
    </>
  );
};

export default Page;
