import { Edit2, Trash } from "iconsax-react";
import React, { useState } from "react";
import Modal from "../shared/Modal";
import AddAddressForm from "../forms/AddAddressForm";
import { ThreeDots } from "react-loader-spinner";

const AddressCard = () => {
  // modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // When clicked on delete button , it disable card
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // for call delelte address api
  const handleDelete = async () => {
    setIsLoading(true);

    try {
      // call api
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

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
          ویرایش آدرس
        </Modal.Header>
        <Modal.Body containerClass="p-3 bg-muted-100">
          <AddAddressForm type="Edit" />
        </Modal.Body>
      </Modal>
      <div className="relative flex w-full flex-col gap-y-8 overflow-hidden rounded-8 border border-muted-500 bg-muted-200 p-4 md:w-[49.7%]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#000"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        <div className="flex items-center justify-between gap-x-4">
          <h1 className="caption-lg md:body-md line-clamp-1 text-muted-900">
            تهران: اقدسیه ، بزرگراه ارتش ، مجتمع شمیران سنتر ، طبقه 10
          </h1>
          <div className="flex gap-x-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="smooth-transition hover:text-primary-800"
            >
              <Edit2 className="h-6 w-6 xl:h-7 xl:w-7" />
            </button>
            <button
              onClick={handleDelete}
              className="smooth-transition hover:text-error-200"
            >
              <Trash className="h-6 w-6 xl:h-7 xl:w-7" />
            </button>
          </div>
        </div>
        <div className="caption-md md:caption-lg flex items-center justify-between text-muted-800">
          <p>محل کار</p>
          <p>سردار وظیفه</p>
          <p dir="ltr">0912 786 4512</p>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
