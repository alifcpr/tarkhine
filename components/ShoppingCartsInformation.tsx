import { ShoppingCartList } from "@/types/type";
import {
  ArrowLeft2,
  TickCircle,
  Trash,
  Wallet2,
  Warning2,
} from "iconsax-react";
import React, { Dispatch, SetStateAction } from "react";
import SmallShoppingCart from "./cards/SmallShoppingCart";
import { v4 as uuidv4 } from "uuid";

interface ShoppingCartsInformationProps {
  data: ShoppingCartList;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const ShoppingCartsInformation = ({
  data,
  step,
  setStep,
}: ShoppingCartsInformationProps) => {
  // renderButton due to the step number
  const renderButton = (step: number) => {
    switch (step) {
      case 1:
        return (
          <button
            onClick={() => setStep(2)}
            className="button-primary body-md flex items-center justify-center rounded-4 py-1.5"
          >
            مرحله بعد
            <ArrowLeft2 />
          </button>
        );
      case 2:
        return (
          <button
            onClick={() => setStep(3)}
            className="button-primary body-md flex items-center justify-center gap-x-2 rounded-4 py-1.5"
          >
            <TickCircle />
            ثبت سفارش
          </button>
        );
      case 3:
        return (
          <button className="button-primary body-md flex items-center justify-center gap-x-2 rounded-4 py-1.5">
            <Wallet2 />
            تکمیل خرید
          </button>
        );
    }
  };

  return (
    <div className="flex w-full flex-col px-4 pb-4">
      <div className="flex items-center justify-between border-b-2 py-4">
        <p className="body-md">سبد خرید ( {data.detail.cardQunatity} )</p>
        <button>
          <Trash />
        </button>
      </div>
      {step >= 2 && (
        <div
          dir="ltr"
          className="my-2 hidden max-h-[200px] min-h-[100px] overflow-auto border-b-2 border-muted-300 lg:block"
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
        <p className="text-primary-800">
          {data.detail.totalPrice.toLocaleString("fa")} تومان
        </p>
      </div>
      {renderButton(step)}
    </div>
  );
};

export default ShoppingCartsInformation;
