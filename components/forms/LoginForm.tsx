"use client";
import Link from "next/link";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { loginValidation } from "@/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";
import { getOtpApi } from "@/services/auth.services";
import { useMutation } from "@tanstack/react-query";

type LoginFormProps = {
  phoneState: string;
  setPhoneState: Dispatch<SetStateAction<string>>;
  setStepTwo: Dispatch<SetStateAction<boolean>>;
};

const LoginForm = ({
  phoneState,
  setPhoneState,
  setStepTwo,
}: LoginFormProps) => {
  // button loading

  const { mutate: getOtpMutate, isLoading: isGettingOtp } = useMutation({
    mutationKey: ["user"],
    mutationFn: (phone: string) => getOtpApi(phone),
    onSuccess: () => {
      setStepTwo(true);
      toast.success("کد با موفقیت به شماره موبایل شما ارسال شد");
    },
    onError: ({ data }) => {
      toast.error(data.message);
    },
  });

  // form handler
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      phoneNumber: phoneState,
    },
    resolver: yupResolver(loginValidation),
  });

  // send code when input value is correct
  const sendCode = async (data: { phoneNumber: string }) => {
    getOtpMutate(data.phoneNumber);
  };

  // phone state handler
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneState(e.target.value);
  };

  return (
    <div className="flex flex-col items-center md:rounded-8 md:border-2 md:p-8">
      <Link href={"/"} className="flex items-center justify-center">
        <div>
          <Image
            src={"/assets/images/Logo.png"}
            width={200}
            height={200}
            alt="logo"
          />
        </div>
      </Link>
      <form
        onSubmit={handleSubmit((data) => sendCode(data))}
        className="mt-20 flex flex-col items-center md:mt-10"
        autoComplete="off"
      >
        <h1 className="h5-bold">ورود / ثبت نام</h1>
        <p className="body-sm mt-2 text-muted-600">
          با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد
        </p>
        <div className="my-5 w-full">
          <input
            {...register("phoneNumber", {
              onChange: handleInputChange,
            })}
            type="text"
            className="input-gray-outline body-md  w-full px-4 py-3"
            placeholder="شماره همراه"
            inputMode="numeric"
            disabled={isGettingOtp}
          />
          {errors.phoneNumber && (
            <p className="caption-md mt-2 text-error-200">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isGettingOtp || !isDirty}
          className="button-primary button-lg flex w-full items-center justify-center rounded-8 p-2"
        >
          {isGettingOtp ? (
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
            "ادامه"
          )}
        </button>
      </form>
      <p className="caption-lg mt-8 text-muted-950">
        ورود و عضویت در ترخینه به منزله قبول{" "}
        <Link href={"/privacy"} className="text-primary-800">
          قوانین و مقررات
        </Link>{" "}
        است.
      </p>
    </div>
  );
};

export default LoginForm;
