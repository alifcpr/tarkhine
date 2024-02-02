"use client";
import { Add, Trash } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./shared/Modal";
import { useForm } from "react-hook-form";
import ChooseImageForm from "./forms/ChooseImageForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProfileImageApi } from "@/services/user.services";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";

type ProfileImageProps = {
  image: string | undefined;
};

const ProfileImage = ({ image }: ProfileImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { setValue, watch } = useForm({
    defaultValues: {
      image: [],
    },
  });

  const queryClient = useQueryClient();
  const { mutate: deleteImageMutate, isLoading: isDeleting } = useMutation({
    mutationKey: ["user"],
    mutationFn: async () => deleteProfileImageApi,
    onSuccess: () => {
      toast.success("عکس پروفایل شما با موفقیت حذف شد");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("عکس پروفایل شما حذف نشد ، بعدا امتحان کنید");
    },
  });

  const deleteProfileImageHandler = () => {
    deleteImageMutate();
  };

  return (
    <>
      <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen}>
        <Modal.Header
          titleClass="h7-semibold"
          containerClass="!bg-muted-400 px-5 py-4 "
          iconClass="hidden"
        >
          تصویر پروفایل خود را انتخاب کنید
        </Modal.Header>
        <Modal.Body containerClass="px-5 bg-muted-400 w-[320px] md:w-auto">
          <ChooseImageForm
            setImage={setValue}
            imageState={watch("image")}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal.Body>
      </Modal>

      <div className="relative  h-20 w-20 overflow-hidden  md:h-24 md:w-24">
        {isDeleting && (
          <div className="absolute inset-0 z-[999999] flex items-center justify-center rounded-full backdrop-blur-sm">
            <Oval color="#fff" secondaryColor="#353535" width={50} />
          </div>
        )}
        <Image
          width={200}
          height={200}
          alt="عکس پروفایل"
          src={image || "/assets/images/userDefaultProfile.png"}
          className="min-h-full min-w-full rounded-full border-2 object-cover object-center"
        />
        {!image ? (
          <button
            onClick={deleteProfileImageHandler}
            disabled={isDeleting}
            className="absolute bottom-0 left-0 z-[999999] flex h-6 w-6 items-center justify-center rounded-full bg-error-200"
          >
            <Trash className="h-5 w-5 text-muted-300" />
          </button>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-0 left-0 flex h-6 w-6 items-center justify-center rounded-full bg-muted-700 "
          >
            <Add className="h-5 w-5 text-muted-300" />
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileImage;
