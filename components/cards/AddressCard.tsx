import { Edit2, Trash } from "iconsax-react";
import React, { useState } from "react";
import Modal from "../shared/Modal";
import AddAddressForm from "../forms/AddAddressForm";
import { ThreeDots } from "react-loader-spinner";
import { Addresses } from "@/types/type.d";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAddressApi } from "@/services/address.services";
import toast from "react-hot-toast";

type AddressCardProps = {
  addressData: Addresses;
};

const AddressCard = ({ addressData }: AddressCardProps) => {
  // modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const { mutate: deleteAddressMutate, isLoading: isDeleting } = useMutation({
    mutationKey: ["address"],
    mutationFn: async (id: string) => await deleteAddressApi(id),
    onSuccess: () => {
      toast.success("آدرس با موفقیت حذف شد");
      queryClient.invalidateQueries(["address"]);
    },
    onError: () => {
      toast.error("آدرس حذف نشد بعداامتحان کنید");
    },
  });

  // for call delelte address api
  const handleDelete = async (id: string) => {
    deleteAddressMutate(id);
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
          <AddAddressForm
            closeModal={() => setIsModalOpen(false)}
            addressData={addressData}
            type="Edit"
          />
        </Modal.Body>
      </Modal>
      <div className="relative flex w-full flex-col gap-y-8 overflow-hidden rounded-8 border border-muted-500 bg-muted-200 p-4 xl:w-[49.7%]">
        {isDeleting && (
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
            {addressData.description}
          </h1>
          <div className="flex gap-x-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="smooth-transition hover:text-primary-800"
            >
              <Edit2 className="h-6 w-6 xl:h-7 xl:w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(addressData._id);
              }}
              className="smooth-transition hover:text-error-200"
            >
              <Trash className="h-6 w-6 xl:h-7 xl:w-7" />
            </button>
          </div>
        </div>
        <div className="caption-md md:caption-lg flex items-center justify-between text-muted-800">
          <p className="w-1/3 text-start">{addressData.addressTitle}</p>
          <p className="w-1/3 text-center">{addressData.name}</p>
          <p className="w-1/3 text-start" dir="ltr">
            {addressData.phone}
          </p>
        </div>
      </div>
    </>
  );
};

export default AddressCard;
