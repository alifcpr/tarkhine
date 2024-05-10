"use client";

import { MessageBoxInputs } from "@/types/type.d";
import { messageValidation } from "@/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";

const MessageBox = () => {
  // loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // form controller
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      text: "",
    },
    resolver: yupResolver(messageValidation),
  });

  // handle form submit
  const handleFormSubmit = (values: MessageBoxInputs) => {
    try {
      // call api
      setIsLoading(true);
      toast.success("پیام شما به موفقیت به ترخینه ارسال شد");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hidden lg:flex lg:flex-col lg:items-start lg:justify-center lg:gap-y-4">
      <h1 className="h5-bold lg:body-lg xl:h5-bold mb-1">پیام به ترخینه</h1>
      <form
        onSubmit={handleSubmit((data) => handleFormSubmit(data))}
        className="flex flex-col gap-y-5"
        autoComplete="off"
      >
        <div className="flex gap-x-6">
          <div className="flex flex-col gap-y-3">
            <div>
              <input
                type="text"
                className="input-white-outline lg:caption-md xl:caption-lg lg:min-w-[220px] xl:min-w-[350px] xl:px-2 xl:py-3"
                placeholder="نام نام خانوادگی"
                {...register("name")}
                disabled={isLoading}
              />
              <p className="caption-md px-2 py-1 text-error-200">
                {errors.name && errors.name.message}
              </p>
            </div>
            <div>
              <input
                type="text"
                className="input-white-outline lg:caption-md xl:caption-lg lg:min-w-[220px] xl:min-w-[350px] xl:px-2 xl:py-3"
                placeholder="شماره تماس"
                {...register("phoneNumber")}
                disabled={isLoading}
              />
              <p className="caption-md px-2 py-1 text-error-200">
                {errors.phoneNumber && errors.phoneNumber.message}
              </p>
            </div>
            <div>
              <input
                type="text"
                className="input-white-outline lg:caption-md xl:caption-lg lg:min-w-[220px] xl:min-w-[350px] xl:px-2 xl:py-3"
                placeholder="آدرس ایمیل (اختیاری)"
                {...register("email")}
                disabled={isLoading}
              />
              <p className="caption-md px-2 py-1 text-error-200">
                {errors.email && errors.email.message}
              </p>
            </div>
          </div>
          <div className="relative self-stretch">
            <textarea
              className="input-white-outline lg:caption-md xl:caption-lg h-full lg:min-w-[220px] xl:min-w-[350px] xl:px-2 xl:py-3"
              placeholder="پیام شما"
              {...register("text")}
              disabled={isLoading}
            ></textarea>
            <span
              className={`caption-md absolute -bottom-7 left-0 text-muted-100 ${
                watch("text").length > 200 && "text-error-200"
              }`}
            >{`200 / ${watch("text").length}`}</span>
            <p className="caption-md px-2 py-1 text-error-200">
              {errors.text && errors.text.message}
            </p>
          </div>
        </div>

        <div className="mt-4 flex w-full items-center justify-end">
          <button
            className={`button-white-outline lg:body-sm lg:mt-2 lg:px-6 lg:py-1 xl:px-7 xl:py-3`}
            disabled={isLoading}
          >
            {isLoading ? (
              <Oval
                width={20}
                height={20}
                wrapperClass={"text-white"}
                strokeWidthSecondary={10}
                strokeWidth={5}
                color={"#000"}
                secondaryColor={"#1C2833"}
              />
            ) : (
              "ارسال پیام"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageBox;
