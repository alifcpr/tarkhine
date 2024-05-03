import { ShoppingCartList } from "@/types/type";
import { Trash, Warning2 } from "iconsax-react";
import React, { Dispatch, SetStateAction } from "react";

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
  return (
    <div className="flex w-full flex-col px-4">
      <div className="flex items-center justify-between border-b-2 py-4">
        <p className="body-md">سبد خرید ( {data.detail.cardQunatity} )</p>
        <button>
          <Trash />
        </button>
      </div>
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
      <button
        onClick={() => setStep(2)}
        className="button-primary body-md rounded-4 py-1"
      >
        تکمیل اطلاعات
      </button>
    </div>
  );
};

export default ShoppingCartsInformation;
