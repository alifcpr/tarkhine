"use client";
import useUser from "@/hooks/useUser";
import { addAddressApi, editAddressApi } from "@/services/address.services";
import { AddAddress, Addresses } from "@/types/type.d";
import { addressFormValidation } from "@/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";

type AddAddressFormProps = {
  type: "Add" | "Edit";
  addressData?: Addresses;
  closeModal: () => void;
};

const AddAddressForm = ({
  type,
  addressData,
  closeModal,
}: AddAddressFormProps) => {
  const { data } = useUser();

  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: type === "Edit" && addressData ? addressData.addressTitle : "",
      own: type === "Edit" && addressData ? addressData.ownReceiver : true,
      phoneNumber: data?.phone,
      getterName: type === "Edit" && addressData ? addressData.name : "",
      getterPhoneNumber:
        type === "Edit" && addressData
          ? addressData.ownReceiver
            ? ""
            : addressData.phone
          : "",
      address: type === "Edit" && addressData ? addressData.description : "",
    },
    resolver: yupResolver(addressFormValidation),
  });

  const queryClient = useQueryClient();

  // react query for posting new address
  const { mutate: addAddressMutate, isLoading: isAdding } = useMutation({
    mutationKey: ["address"],
    mutationFn: async (addressData: AddAddress) =>
      await addAddressApi(addressData),
    onSuccess: () => {
      toast.success("آدرس جدید با موفقیت ایجاد شد");
      queryClient.invalidateQueries();
      closeModal();
    },
    onError: () => {
      toast.error("آدرس ایجاد نشد ، بعدا امتحان کنید");
    },
  });

  // react query for edit address
  const { mutate: editeAddressMutate, isLoading: isEditing } = useMutation({
    mutationKey: ["address"],
    mutationFn: async ({
      id,
      addressData,
    }: {
      id: string;
      addressData: AddAddress;
    }) => editAddressApi({ id, addressData }),
    onSuccess: () => {
      toast.success("آدرس با موفقیت ویرایش شد");
      queryClient.invalidateQueries();
      closeModal();
    },
    onError: () => {
      toast.error("آدرس ویرایش نشد بعدا امتحان کنید");
    },
  });

  // for call add address api , when (type === "Add") is working
  const handleAddAddress = (formData: any) => {
    addAddressMutate({
      addressTitle: formData.title,
      description: formData.address,
      anotherReceiver: {
        addressTitle: formData.title,
        description: formData.address,
        name: formData.getterName,
        phone: formData.own ? formData.phoneNumber : formData.getterPhoneNumber,
      },
      ownReceiver: formData.own,
    });
  };

  // for call edit address api , when (type === "Edit") is working
  const handleEditAddress = (id: string, formData: any) => {
    //
    editeAddressMutate({
      id,
      addressData: {
        addressTitle: formData.title,
        description: formData.address,
        anotherReceiver: {
          addressTitle: formData.title,
          description: formData.address,
          name: formData.getterName,
          phone: formData.own
            ? formData.phoneNumber
            : formData.getterPhoneNumber,
        },
        ownReceiver: formData.own,
      },
    });
  };
  return (
    <form
      onSubmit={
        type === "Edit"
          ? handleSubmit((data) => handleEditAddress(addressData!._id, data))
          : handleSubmit((data) => handleAddAddress(data))
      }
      className="flex h-[calc(100vh-10vh)] flex-col justify-center gap-y-4 md:h-max"
      autoComplete="off"
    >
      <div className="flex flex-col gap-y-2">
        <label htmlFor="title-address" className="overline-lg">
          عنوان آدرس
        </label>
        <input
          type="text"
          className="input-gray-outline caption-lg w-full p-2 md:min-w-[500px]"
          placeholder="عنوان آدرس"
          id="title-address"
          disabled={isAdding || isEditing}
          {...register("title")}
        />
        {errors.title && (
          <p className="caption-md text-error-200">{errors.title.message}</p>
        )}
      </div>
      <div className="flex  gap-x-2">
        <input
          checked={watch("own")}
          {...register("own", {
            onChange(e) {
              setValue("own", e.target.checked);
            },
          })}
          id="own"
          type="checkbox"
          disabled={isAdding || isEditing}
          className="cursor-pointer"
        />
        <label htmlFor="own" className="body-md cursor-pointer">
          تحویل گیرنده خودم هستم
        </label>
      </div>
      {watch("own") ? (
        <div className="flex flex-col gap-y-2">
          <label htmlFor="phonenumber" className="overline-lg">
            شماره همراه
          </label>
          <input
            type="text"
            className="input-gray-outline caption-lg w-full p-2 md:min-w-[500px]"
            placeholder="شماره همراه"
            disabled={true}
            id="phonenumber"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="caption-md text-error-200">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="getter-name" className="overline-lg">
              نام نام خانوداگی تحویل گیرنده
            </label>
            <input
              type="text"
              className="input-gray-outline caption-lg w-full p-2 md:min-w-[500px]"
              placeholder="نام نام خانوداگی تحویل گیرنده"
              id="getter-name"
              {...register("getterName")}
              disabled={isAdding || isEditing}
            />
            {errors.getterName && (
              <p className="caption-md text-error-200">
                {errors.getterName.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="getter-phonenumber" className="overline-lg">
              شماره همراه تحویل گیرنده
            </label>
            <input
              type="text"
              className="input-gray-outline caption-lg w-full p-2 md:min-w-[500px]"
              placeholder="شماره همراه تحویل گیرنده"
              id="getter-phonenumber"
              {...register("getterPhoneNumber")}
              disabled={isAdding || isEditing}
            />
            {errors.getterPhoneNumber && (
              <p className="caption-md text-error-200">
                {errors.getterPhoneNumber.message}
              </p>
            )}
          </div>
        </>
      )}
      <div className="flex flex-col gap-y-2">
        <label htmlFor="address" className="overline-lg">
          آدرس دقیق
        </label>
        <textarea
          className="input-gray-outline caption-lg w-full p-2 md:min-w-[500px]"
          placeholder="آدرس دقیق شما"
          id="address"
          rows={7}
          {...register("address")}
          disabled={isAdding || isEditing}
        />
        {errors.address && (
          <p className="caption-md text-error-200">{errors.address.message}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={isAdding || isEditing}
          className="button-primary body-md flex w-full items-center justify-center rounded-md p-2"
        >
          {isAdding || isEditing ? (
            <Oval
              width={23}
              height={23}
              wrapperClass={"text-white"}
              strokeWidthSecondary={10}
              strokeWidth={5}
              color={"#fff"}
              secondaryColor={"#fff"}
            />
          ) : type === "Edit" ? (
            "ویرایش آدرس"
          ) : (
            "ثبت آدرس"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddAddressForm;
