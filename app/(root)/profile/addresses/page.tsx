/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { AddCircle, ArrowRight2 } from "iconsax-react";
import React, { useState } from "react";
import Empty from "@/components/profile/Empty";
import Modal from "@/components/shared/Modal";
import AddAddressForm from "@/components/forms/AddAddressForm";
import AddressCard from "@/components/cards/AddressCard";
import useGetAddresses from "@/hooks/useGetAddresses";
import Loading from "./loading";
import Pagination from "@/components/Pagination";
import useProfileMenuController from "@/hooks/useProfileMenuController";
import useTitle from "@/hooks/useTitle";

const Page = () => {
  // for back to profile page and open menu
  const { backToProfilePage } = useProfileMenuController();

  // modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // getting user addresses from api
  const { data: addresses, isLoading, isPreviousData } = useGetAddresses();

  // page title
  useTitle("آدرس های من");

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
          <AddAddressForm type="Add" closeModal={() => setIsModalOpen(false)} />
        </Modal.Body>
      </Modal>

      <div className="h-full">
        <div className="flex items-center justify-between p-3 font-estedad md:border-b">
          <button onClick={backToProfilePage}>
            <ArrowRight2 className="h-10 w-10 md:hidden" />{" "}
          </button>
          <h1 className="h5-bold  md:w-full">
            {isPreviousData && "Loading.."}
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden text-primary-800 md:flex md:items-center md:gap-x-2"
          >
            <AddCircle />
            <span className="whitespace-nowrap">افزودن آدرس جدید</span>
          </button>
        </div>
        {isLoading ? (
          <Loading />
        ) : addresses && addresses.data.length > 0 ? (
          <>
            <div className="my-5 flex flex-wrap justify-between gap-2">
              {addresses.data.map((address) => (
                <AddressCard key={address._id} addressData={address} />
              ))}
            </div>
            <Pagination totalPage={+addresses!.maxPage} />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Empty
              btnLabel="افزودن آدرس"
              title="شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!"
              setOpenModal={setIsModalOpen}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
