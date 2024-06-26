"use client";
import { DiscountCodeInfo, ShoppingCartList } from "@/types/type";
import {
  ArrowLeft2,
  TickCircle,
  Trash,
  User,
  Wallet2,
  Warning2,
} from "iconsax-react";
import React, { Dispatch, SetStateAction } from "react";
import SmallShoppingCart from "./cards/SmallShoppingCart";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import useUser from "@/hooks/useUser";
import Link from "next/link";

interface ShoppingCartsInformationProps {
  data: ShoppingCartList;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  addressId: string;
  isLoading: boolean;
  sendToGatewayFunc: () => void;
  discountCodeInfo: DiscountCodeInfo;
}

const ShoppingCartsInformation = ({
  data,
  step,
  setStep,
  addressId,
  isLoading,
  sendToGatewayFunc,
  discountCodeInfo,
}: ShoppingCartsInformationProps) => {
  const { data: userData, isLoading: userLoading } = useUser();

  // call send to payment gateway api when onClick button
  const handleSendToGateway = () => {
    toast.loading("صبر کنید...", { id: "gateway-loading" });
    sendToGatewayFunc();
  };

  // handle change step
  const handleChangeStep = (nextStep: number) => {
    if (step === 2) {
      !addressId ? toast("باید محل ارسال غذا را مشخص کنید") : setStep(nextStep);
    } else {
      setStep(nextStep);
    }
  };

  // renderButton due to the step number
  const renderButton = (step: number) => {
    switch (step) {
      case 1:
        return (
          <button
            onClick={() => handleChangeStep(2)}
            className="button-primary body-md flex items-center justify-center rounded-4 py-1.5"
          >
            مرحله بعد
            <ArrowLeft2 />
          </button>
        );
      case 2:
        return (
          <button
            onClick={() => handleChangeStep(3)}
            className="button-primary body-md flex items-center justify-center gap-x-2 rounded-4 py-1.5"
          >
            <TickCircle />
            ثبت سفارش
          </button>
        );
      case 3:
        return (
          <button
            onClick={handleSendToGateway}
            disabled={isLoading}
            className="button-primary body-md flex items-center justify-center gap-x-2 rounded-4 py-1.5"
          >
            <Wallet2 />
            تکمیل خرید
          </button>
        );
    }
  };

  return (
    <div className="relative flex w-full flex-col overflow-hidden px-4 pb-4">
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-muted-950/40 backdrop-blur-sm">
          <ThreeDots color="#fff" />
        </div>
      )}
      <div className="flex items-center justify-between border-b-2 py-4">
        <p className="body-md">سبد خرید ( {data.detail.cardQunatity} )</p>
        <button>
          <Trash />
        </button>
      </div>
      {step >= 2 && (
        <div
          dir="ltr"
          className="hidden max-h-[200px] min-h-max overflow-auto border-b-2 border-muted-300 py-2 lg:block"
        >
          {data.data.map((cartData: any) => (
            <SmallShoppingCart data={cartData} key={uuidv4()} />
          ))}
        </div>
      )}
      <div className="body-md flex items-center justify-between border-b-2 py-4">
        <p>تخفیف محصولات</p>
        <p className="text-muted-700">
          {data.detail.totalDiscount.toLocaleString("fa")} تومان
        </p>
      </div>
      <div className="body-md flex flex-col border-b-2 py-4">
        <div className="flex w-full items-center justify-between">
          <p>هزینه ارسال</p>
          <p className="text-muted-700">{(20000).toLocaleString("fa")} تومان</p>
        </div>
        <div className="caption-lg mt-3 flex items-center gap-x-1 text-warning-300">
          <Warning2 className="h-5 w-5" />
          <p>سفارشات فقط به صورت بیرون بر میباشد</p>
        </div>
      </div>
      <div className="body-md  flex items-center justify-between py-4">
        <p>مبلغ قابل پرداخت</p>
        {discountCodeInfo.percentage ? (
          <div className="flex flex-col items-center gap-x-3 gap-y-2 md:flex-row">
            <div className="flex items-center gap-x-2">
              <p className="text-muted-600 line-through">
                {discountCodeInfo.lastPrice.toLocaleString("fa")}
              </p>
              <span className="rounded-8 bg-error-200/10 px-2 text-error-200">
                {discountCodeInfo.percentage} %
              </span>
            </div>
            <p className="order-last md:order-first">
              {Number(discountCodeInfo.newPrice).toLocaleString("fa")} تومان
            </p>
          </div>
        ) : (
          <p className="text-primary-800">
            {data.detail.totalPrice.toLocaleString("fa")} تومان
          </p>
        )}
      </div>
      {userLoading ? (
        <p className="body-md">درحال بررسی ...</p>
      ) : userData?.phone ? (
        renderButton(step)
      ) : (
        <Link
          href={"/login?redirect_url=/cart"}
          className="button-primary body-md flex items-center justify-center gap-x-1 rounded-4 py-1.5"
        >
          <User />
          ورود به حساب کاربری
        </Link>
      )}
    </div>
  );
};

export default ShoppingCartsInformation;
