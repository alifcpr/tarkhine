import { AddressParams } from "@/types/type.d";
import { addressFormValidation } from "@/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";

type AddAddressFormProps = {
  type: "Add" | "Edit";
  data?: AddressParams;
};

const AddAddressForm = ({ type, data }: AddAddressFormProps) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: {
      title:
        type === "Edit" && data
          ? data.ownReceiver
            ? data.addressTitle
            : data.anotherReceiver.addressTitle
          : "",
      own: type === "Edit" && data ? data.ownReceiver : true,
      phoneNumber: type === "Edit" && data ? data.phone : "",
      getterName: type === "Edit" && data ? data.anotherReceiver.name : "",
      getterPhoneNumber:
        type === "Edit" && data ? data.anotherReceiver.phone : "",
      address:
        type === "Edit" && data
          ? data.ownReceiver
            ? data.description
            : data.anotherReceiver.description
          : "",
    },
    resolver: yupResolver(addressFormValidation),
  });

  // When the form is confirmed, it disables all inputs and buttons
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // for call add address api , when (type === "Add") is working
  const handleAddAddress = (data: any) => {
    setIsLoading(true);

    try {
      // call api
      toast.success("آدرس جدید با موفقیت ایجاد شد");
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // for call edit address api , when (type === "Edit") is working
  const handleEditAddress = (data: any) => {
    setIsLoading(true);

    try {
      // call api
      toast.success("آدرس شما با موفقیت ویرایش شد");
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={
        type === "Edit"
          ? handleSubmit((data) => handleEditAddress(data))
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
          disabled={isLoading}
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
          disabled={isLoading}
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
            disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
          disabled={isLoading}
        />
        {errors.address && (
          <p className="caption-md text-error-200">{errors.address.message}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="button-primary body-md flex w-full items-center justify-center rounded-md p-2"
        >
          {isLoading ? (
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
