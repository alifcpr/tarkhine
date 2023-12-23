"use client";
import React, { useState } from "react";
import Modal from "../Modal";
import Search from "./Search";
import { SearchNormal1 } from "iconsax-react";

const SearchBox = () => {
  // modal state
  const [open, setOpen] = useState<boolean>(false);

  // open modal func
  const openSearchBox = () => {
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={openSearchBox}
        className="hidden rounded-4 bg-primary-100 p-1 md:block md:p-2 "
      >
        <SearchNormal1 className="h-5 w-5 text-primary-800 md:h-6 md:w-6" />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header
          containerClass="bg-muted-400 px-8 py-5"
          titleClass="h5-bold text-muted-800"
          iconClass="text-muted-800 w-10 h-10"
        >
          جستجو
        </Modal.Header>
        <Modal.Body containerClass="overflow-hidden bg-muted-100 py-9 px-7">
          <h1 className="body-md text-center">
            لطفا متن خود را تایپ و سپس دکمه Enter را بزنید
          </h1>
          <Search
            containerClasses="!min-w-[500px] mt-3"
            inputClasses="body-lg"
            closeModal={() => setOpen(false)}
            mode="Enter"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchBox;
