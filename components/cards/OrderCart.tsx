import { Order } from "@/types/type";
import { Calendar, Location, Wallet2 } from "iconsax-react";
import React from "react";
import StepBar from "../StepBar";
import { orderCartStepList } from "@/constants";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Link from "next/link";

interface OrderCartProps {
  data: Order;
}

const OrderCart = ({ data }: OrderCartProps) => {
  const {
    createdAt,
    carts,
    addressId: { addressTitle },
    totalPayment,
  } = data;

  return (
    <div className="rounded-4 border p-4">
      <div className="flex items-center justify-between gap-x-2">
        <p className="body-md lg:body-lg">شعبه اصلی</p>
        <div className="flex items-center gap-x-2">
          <p className="caption-lg lg:body-md rounded-4 bg-muted-400 px-3 py-1">
            ارسال توسط پیک
          </p>
          <p className="caption-lg md:body-md rounded-4 bg-warning-100 px-3 py-1 text-warning-300">
            جاری
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-start justify-between gap-y-3">
        <div className="flex flex-col items-start justify-end gap-2 md:flex-row">
          <div className="flex items-center gap-x-2">
            <Calendar />
            <p className="caption-lg md:body-md">
              {new Date(createdAt).toLocaleDateString("fa")}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Wallet2 className="md:hidden" />
            <p className="caption-lg md:body-md">
              مبلغ : {totalPayment.toLocaleString("fa")} تومان
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Location />
          <p className="caption-lg md:body-md">{addressTitle}</p>
        </div>
      </div>
      <div className="mx-auto mt-5 flex  justify-center">
        <StepBar activeStep={1}>
          {orderCartStepList.map(({ text, Icon }: any, index: number) => (
            <StepBar.Step
              key={uuidv4()}
              active={index === 0}
              index={index}
              icon={<Icon />}
            >
              <StepBar.Text>{text}</StepBar.Text>
            </StepBar.Step>
          ))}
        </StepBar>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {carts.order.map((item: any) => (
          <div className="rounded-8 border" key={uuidv4()}>
            <div className="relative h-[115px] w-[140px] xl:h-[140px] xl:w-[200px]">
              {item.discount > 0 && (
                <span className="caption-md absolute left-2 top-2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-error-100 p-0.5 text-error-200">
                  % {item.discount}
                </span>
              )}
              <span className="caption-lg absolute bottom-2 left-2 z-[9999]  bg-primary-100 px-2 text-primary-800">
                x{item.totalQuantity.length}
              </span>
              <Image
                src={item.imagesUrl[0]}
                className="h-full w-full rounded-t-8 object-cover object-center"
                width={200}
                height={200}
                alt="غذا"
              />
            </div>
            <Link
              href={`/product/${item.foodId}/${item.title}`}
              className="flex flex-col items-center p-2"
            >
              <p className="caption-lg xl:body-lg">{item.title}</p>
              {item.discount > 0 ? (
                <div className="flex flex-col gap-y-2">
                  <p className="caption-lg md:body-md mt-2 text-muted-600 line-through">
                    {item.price.toLocaleString("fa")} تومان
                  </p>
                  <p className="caption-lg md:body-md">
                    {(
                      item.price -
                      (item.price * item.discount) / 100
                    ).toLocaleString("fa")}{" "}
                    تومان
                  </p>
                </div>
              ) : (
                <p className="caption-lg md:body-md">
                  {item.price.toLocaleString("fa")} تومان
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <button
          disabled
          className="body-md w-full  rounded-8 border-2 border-error-200 px-4 py-2 !font-semibold text-error-200 disabled:opacity-60 md:w-max"
        >
          لغو سفارش
        </button>
      </div>
    </div>
  );
};

export default OrderCart;
