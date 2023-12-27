/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable camelcase */
"use client";
import { profileInfoValidation } from "@/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import Link from "next/link";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";

type ProfileInfoFormProps = {
  type: "See" | "Edit";
};

const ProfileInfoForm = ({ type }: ProfileInfoFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(profileInfoValidation),
    defaultValues: {
      name: "",
      family: "",
      email: "",
      phone: "09128765432",
      brithday: "",
      userName: "",
    },
  });

  useEffect(() => {
    console.log(errors);
  }, [errors, watch]);

  const Okkk = (data: any) => {
    console.log(data);
    setIsLoading(true);

    try {
      // call api
      toast.success("اطلاعات شما با موفقیت تغییر پیدا کرد");
    } catch (error) {
      // catch error
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => Okkk(data))}
        className="flex flex-col gap-y-3 md:mt-5 md:flex-row md:flex-wrap md:justify-center md:gap-x-3"
        autoComplete="off"
      >
        <div className="flex flex-col gap-y-2 md:w-1/3">
          <label className="caption-lg">نام</label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            placeholder="نام"
            disabled={type === "See" || isLoading}
            {...register("name")}
          />
          {errors.name && (
            <p className="caption-md text-error-200">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2 md:w-1/3">
          <label className="caption-lg">نام خانوادگی</label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            placeholder="نام خانوادگی"
            disabled={type === "See" || isLoading}
            {...register("family")}
          />
          {errors.family && (
            <p className="caption-md text-error-200">{errors.family.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2 md:w-1/3">
          <label className="caption-lg">آدرس ایمیل</label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            placeholder="آدرس ایمیل"
            disabled={type === "See" || isLoading}
            {...register("email")}
          />
          {errors.email && (
            <p className="caption-md text-error-200">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2 md:w-1/3">
          <label className="caption-lg">شماره موبایل</label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            placeholder="شماره موبایل"
            disabled
            {...register("phone")}
          />
        </div>
        <div className="flex flex-col gap-y-2 md:w-1/3">
          <label className="caption-lg">تاریخ تولد</label>
          <DatePicker
            inputClass="input-gray-outline caption-lg w-full p-2"
            placeholder="تاریخ تولد (اختیاری)"
            calendar={persian}
            locale={persian_fa}
            className="green font-estedad"
            disabled={type === "See" || isLoading}
            maxDate={new Date()}
            onChange={(data) => setValue("brithday", data)}
          />
        </div>
        <div className="flex flex-col gap-y-2 md:w-1/3">
          <label className="caption-lg">نام نمایشی</label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            placeholder="نام نمایشی"
            disabled={type === "See" || isLoading}
            {...register("userName")}
          />
          {errors.userName && (
            <p className="caption-md text-error-200">
              {errors.userName.message}
            </p>
          )}
        </div>
        {type === "Edit" && (
          <div className="flex w-full items-center gap-x-2 md:mx-auto md:w-2/3 md:justify-end">
            <Link
              href={"/profile"}
              className={`button-outline-primary button-lg flex flex-1 justify-center rounded-4 py-2 text-primary-800 md:md:min-w-[130px] md:flex-none md:px-8 ${
                isLoading && "pointer-events-none opacity-80"
              }`}
            >
              نصراف
            </Link>
            <button
              disabled={!isDirty || isLoading}
              type="submit"
              className="button-primary button-lg flex flex-1 items-center justify-center rounded-4 p-2 md:w-max md:min-w-[130px] md:flex-none"
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
                "ذخیره اطلاعات"
              )}
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default ProfileInfoForm;
