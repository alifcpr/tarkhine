/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable camelcase */
"use client";
import { profileInfoValidation } from "@/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { Oval } from "react-loader-spinner";
import useUser from "@/hooks/useUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfileApi } from "@/services/user.services";
import { User } from "@/types/type.d";
import toast from "react-hot-toast";
import { Edit } from "iconsax-react";

const ProfileInfoForm = () => {
  const { data } = useUser();

  const queryClient = useQueryClient();
  const [type, setType] = useState<string>("See");

  const { mutate: updateProfile, isLoading: isUpdating } = useMutation({
    mutationKey: ["user"],
    mutationFn: async (userData: User) => await editProfileApi(userData),
    onSuccess: (data) => {
      toast.success("پروفایل شما با موفقیت تغییر کرد");
      queryClient.invalidateQueries(["user"]);
    },
  });

  // controll all inputs
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(profileInfoValidation),
    defaultValues: {
      name: data?.name,
      family: data?.family,
      email: data?.email,
      phone: data?.phone,
      birthday: data?.birthday,
      username: data?.username,
    },
  });

  // for call user change info api
  const changeData = (data: any) => {
    updateProfile(data);
  };

  // change mode from edit to see and reverse
  const changeMode = (mode: string) => {
    setType(mode);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => changeData(data))}
        className="flex flex-col gap-y-3 md:mt-5 md:flex-row md:flex-wrap md:justify-center md:gap-x-3"
        autoComplete="off"
      >
        <div className="flex w-full flex-col gap-y-2 xl:w-1/3">
          <label htmlFor="name" className="caption-lg">
            نام
          </label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            id="name"
            placeholder="نام"
            disabled={type === "See" || isUpdating}
            {...register("name")}
          />
          {errors.name && (
            <p className="caption-md text-error-200">{errors.name.message}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-y-2 xl:w-1/3">
          <label htmlFor="family" className="caption-lg">
            نام خانوادگی
          </label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            id="family"
            placeholder="نام خانوادگی"
            disabled={type === "See" || isUpdating}
            {...register("family")}
          />
          {errors.family && (
            <p className="caption-md text-error-200">{errors.family.message}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-y-2 xl:w-1/3">
          <label htmlFor="email" className="caption-lg">
            آدرس ایمیل
          </label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            id="email"
            placeholder="آدرس ایمیل"
            disabled={type === "See" || isUpdating}
            {...register("email")}
          />
          {errors.email && (
            <p className="caption-md text-error-200">{errors.email.message}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-y-2 xl:w-1/3">
          <label htmlFor="phoneNumber" className="caption-lg">
            شماره موبایل
          </label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            id="phoneNumber"
            placeholder="شماره موبایل"
            disabled
            {...register("phone")}
          />
        </div>
        <div className="flex w-full flex-col gap-y-2 xl:w-1/3">
          <label htmlFor="brithday" className="caption-lg">
            تاریخ تولد
          </label>
          <DatePicker
            inputClass="input-gray-outline caption-lg w-full p-2"
            placeholder="تاریخ تولد (اختیاری)"
            calendar={persian}
            id="brithday"
            locale={persian_fa}
            value={watch("birthday")}
            className="green font-estedad"
            disabled={type === "See" || isUpdating}
            maxDate={new Date()}
            onChange={(date) => setValue("birthday", date && date.toString())}
          />
        </div>
        <div className="flex w-full flex-col gap-y-2 xl:w-1/3">
          <label htmlFor="userName" className="caption-lg">
            نام نمایشی
          </label>
          <input
            className="input-gray-outline caption-lg w-full p-2"
            type="text"
            id="userName"
            placeholder="نام نمایشی"
            disabled={type === "See" || isUpdating}
            {...register("username")}
          />
          {errors.username && (
            <p className="caption-md text-error-200">
              {errors.username.message}
            </p>
          )}
        </div>
        {type === "Edit" && (
          <div className="flex w-full items-center gap-x-2 md:mx-auto md:w-2/3 md:justify-end">
            <button
              onClick={() => changeMode("See")}
              className={`button-outline-primary button-lg flex flex-1 justify-center rounded-4 py-2 text-primary-800 md:md:min-w-[130px] md:flex-none md:px-8 ${
                isUpdating && "pointer-events-none opacity-80"
              }`}
            >
              انصراف
            </button>
            <button
              disabled={!isDirty || isUpdating}
              type="submit"
              className="button-primary button-lg flex flex-1 items-center justify-center rounded-4 p-2 md:w-max md:min-w-[130px] md:flex-none"
            >
              {isUpdating ? (
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

      {type === "See" && (
        <div className="mt-5 flex justify-center">
          <button
            className="button-outline-primary flex items-center gap-x-3 rounded-8 px-3 py-2 text-primary-800"
            onClick={() => changeMode("Edit")}
          >
            <Edit />
            <span>ویرایش اطلاعات شخصی</span>
          </button>
        </div>
      )}
    </>
  );
};

export default ProfileInfoForm;
