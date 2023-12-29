import { addressFormValidation } from "@/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";

const AddAddressForm = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: "",
      own: true,
      phoneNumber: "",
      getterName: "",
      getterPhoneNumber: "",
      address: "",
    },
    resolver: yupResolver(addressFormValidation),
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleAddressSubmit = (data: any) => {
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
    <form
      onSubmit={handleSubmit((data) => handleAddressSubmit(data))}
      className="flex flex-col gap-y-4"
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
          ) : (
            "ثبت آدرس"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddAddressForm;
