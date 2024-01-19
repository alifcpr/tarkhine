/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable camelcase */
"use client";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/green.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getAdviceFormValidation } from "@/validations";
import { useState } from "react";
import { Oval } from "react-loader-spinner";

const GetAdviceForm = () => {
  // loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // form controller
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      date: "",
      phoneNumber: "",
    },
    resolver: yupResolver(getAdviceFormValidation),
  });

  // submit data
  const handleForm = (data: any) => {
    setIsLoading(true);

    try {
      // call api
    } catch {
      // catch errors
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => handleForm(data))}
      autoComplete="off"
      className="bg mt-2  flex flex-col flex-wrap items-center justify-center gap-y-3 md:mt-4  md:flex-row md:gap-x-4"
    >
      <div className="w-full md:min-h-[58px] md:w-[31%] xl:min-h-[70px] xl:w-1/4">
        <input
          type="text"
          placeholder="نام و نام خانوداگی"
          {...register("name")}
          disabled={isLoading}
          className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
        />
        {errors.name && (
          <span className="caption-md w-full text-error-200">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="w-full md:min-h-[58px] md:w-[31%] xl:min-h-[70px] xl:w-1/4">
        <input
          type="text"
          placeholder="شماره تماس"
          disabled={isLoading}
          {...register("phoneNumber")}
          className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
        />
        {errors.phoneNumber && (
          <span className="caption-md text-error-200">
            {errors.phoneNumber.message}
          </span>
        )}
      </div>
      <div className="w-full md:min-h-[58px] md:w-[31%] xl:min-h-[70px] xl:w-1/4">
        <div className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1  xl:px-3 xl:py-2">
          <DatePicker
            placeholder="تاریخ تولد (اختیاری)"
            inputClass="border-none w-full input-gray-outline border-none placeholder:text-muted-800 focus:border-none focus:outline-none"
            calendar={persian}
            locale={persian_fa}
            className="green font-estedad"
            maxDate={new Date()}
            disabled={isLoading}
            onChange={(date) => setValue("date", date!.toString())}
          />
        </div>
        {errors.date && (
          <span className="caption-md text-error-200">
            {errors.date.message}
          </span>
        )}
      </div>

      <div className="flex w-full items-center  justify-center">
        <button
          disabled={isLoading}
          className="button-primary caption-lg md:body-sm xl:body-md flex min-w-[100px] items-center justify-center rounded-4 px-3 py-1"
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
            "ثبت مشاوره"
          )}
        </button>
      </div>
    </form>
  );
};

export default GetAdviceForm;
