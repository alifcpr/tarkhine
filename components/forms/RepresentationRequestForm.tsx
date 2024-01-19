"use client";
import { representationRequestValidation } from "@/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import UploadImageBox from "../UploadImageBox";

const RepresentationRequestForm = () => {
  // button loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // handle all the forms
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      nationalCode: "",
      phoneNumber: "",
      province: "",
      city: "",
      area: "",
      address: "",
      typeOfOwnership: "",
      squareArea: "",
      ageOfBuilding: "",
      kitchen: false,
      license: false,
      lodge: false,
      parking: false,
      images: [],
    },
    resolver: yupResolver(representationRequestValidation),
  });

  const handleForm = (data: any) => {
    setIsLoading(true);

    try {
      // call api
    } catch {
      // catch erros
    } finally {
      setIsLoading(false);
    }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit((data) => handleForm(data))}>
      <div className="mx-auto w-full  xl:w-[75%] ">
        <div className="mt-4 px-3">
          <h1 className="body-md lg:body-lg mx-auto mb-3 text-center md:text-start ">
            مشخصات فردی متقاضی
          </h1>
          <div className="flex flex-col flex-wrap items-center gap-y-2 md:flex-row md:flex-nowrap md:gap-x-4 xl:justify-center">
            <div className="w-full md:min-h-[70px] ">
              <input
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="نام و نام خانوادگی"
                {...register("name")}
              />
              {errors.name && (
                <span className="caption-md text-error-200">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="w-full md:min-h-[70px] ">
              <input
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="کد ملی"
                {...register("nationalCode")}
              />
              {errors.nationalCode && (
                <span className="caption-md text-error-200">
                  {errors.nationalCode.message}
                </span>
              )}
            </div>
            <div className="w-full md:min-h-[70px] ">
              <input
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="شماره تماس"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <span className="caption-md text-error-200">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 px-3">
          <h1 className="body-md lg:body-lg mx-auto mb-3 text-center md:text-start ">
            آدرس ملک متقاضی
          </h1>
          <div className="flex flex-col flex-wrap items-center gap-y-2 md:flex-row  md:gap-x-4 xl:justify-center">
            <div className="w-full md:min-h-[70px] md:w-[31.8%] xl:w-[32.5%] ">
              <input
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="استان"
                {...register("province")}
              />
              {errors.province && (
                <span className="caption-md text-error-200">
                  {errors.province.message}
                </span>
              )}
            </div>
            <div className="w-full md:min-h-[70px] md:w-[31.8%] xl:w-[32.5%] ">
              <input
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="شهر"
                {...register("city")}
              />
              {errors.city && (
                <span className="caption-md text-error-200">
                  {errors.city.message}
                </span>
              )}
            </div>
            <div className="w-full md:min-h-[70px] md:w-[31.8%] xl:w-[32.5%] ">
              <input
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="منطقه"
                {...register("area")}
              />
              {errors.area && (
                <span className="caption-md text-error-200">
                  {errors.area.message}
                </span>
              )}
            </div>
            <div className="w-full">
              <textarea
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="آدرس دقیق"
                {...register("address")}
              />
              {errors.address && (
                <span className="caption-md text-error-200">
                  {errors.address.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 px-3">
          <h1 className="body-md lg:body-lg mx-auto mb-3 text-center md:text-start ">
            مشخصات ملک متقاضی
          </h1>
          <div className="flex flex-col flex-wrap items-center gap-y-2 md:flex-row md:flex-nowrap md:gap-x-4 xl:justify-center">
            <div className="w-full md:min-h-[70px] ">
              <input
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="نوع مالکیت"
                {...register("typeOfOwnership")}
              />
              {errors.typeOfOwnership && (
                <span className="caption-md text-error-200">
                  {errors.typeOfOwnership.message}
                </span>
              )}
            </div>
            <div className="w-full md:min-h-[70px] ">
              <input
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="مساحت ملک (متر مربع)"
                {...register("squareArea")}
              />
              {errors.squareArea && (
                <span className="caption-md text-error-200">
                  {errors.squareArea.message}
                </span>
              )}
            </div>
            <div className="w-full md:min-h-[70px] ">
              <input
                className="input-gray-outline caption-lg xl:body-md w-full px-2 py-1 xl:px-3 xl:py-2"
                placeholder="سن بنا"
                {...register("ageOfBuilding")}
              />
              {errors.ageOfBuilding && (
                <span className="caption-md text-error-200">
                  {errors.ageOfBuilding.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 px-3">
          <h1 className="body-md lg:body-lg mx-auto mb-3 text-center md:text-start ">
            امکانات ملک متقاضی
          </h1>
          <div className="flex w-full flex-col items-start justify-between text-muted-800 md:flex-row ">
            <div className="w-full md:w-1/2">
              <h2 className="body-md lg:overline-lg text-start">
                ملک متقاضی :
              </h2>
              <div
                dir="ltr"
                className="mt-2 flex flex-wrap items-center justify-evenly"
              >
                <div className="caption-lg md:body-sm flex w-1/2 items-center justify-end gap-x-2 ">
                  <label htmlFor="license">پروانه کسب دارد</label>
                  <input
                    id="license"
                    type="checkbox"
                    {...register("license")}
                    className="cursor-pointer accent-primary-800"
                  />
                </div>
                <div className="caption-lg md:body-sm flex w-1/2 items-center justify-end gap-x-2 ">
                  <label htmlFor="kitchen">آشپزخانه دارد.</label>
                  <input
                    id="kitchen"
                    type="checkbox"
                    {...register("kitchen")}
                    className="cursor-pointer accent-primary-800"
                  />
                </div>
                <div className="caption-lg md:body-sm flex w-1/2 items-center justify-end gap-x-2 ">
                  <label htmlFor="parking">پارکینگ دارد.</label>
                  <input
                    id="parking"
                    type="checkbox"
                    {...register("parking")}
                    className="cursor-pointer accent-primary-800"
                  />
                </div>
                <div className="caption-lg md:body-sm flex w-1/2 items-center justify-end gap-x-2 ">
                  <label htmlFor="lodge">انبار دارد.</label>
                  <input
                    id="lodge"
                    type="checkbox"
                    {...register("lodge")}
                    className="cursor-pointer accent-primary-800"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex w-full flex-col items-center md:mt-0 md:w-1/2">
              <h1 className="body-md lg:overline-lg mb-2 w-full text-start text-muted-800">
                تصاویر ملک:
              </h1>
              <UploadImageBox
                setState={setValue}
                maxWidth={900}
                maxHeight={700}
                imageState={watch("images")}
                stateName="images"
                previewImage={true}
                previewCardStyle="!w-full !min-h-[320px]"
                maxImage={4}
                placeHolder="برای آپلود ، تصویر ملک را بکشید و رها کنید ، یا کلیک کنید"
              />

              {errors.images && (
                <span className="caption-md text-error-200">
                  {errors.images.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex w-full items-center  justify-center">
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
            "ثبت اطلاعات"
          )}
        </button>
      </div>
    </form>
  );
};

export default RepresentationRequestForm;
