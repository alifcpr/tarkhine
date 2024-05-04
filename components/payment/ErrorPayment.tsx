import React from "react";
import errorImage from "@/public/assets/images/Errorpayment.png";
import Image from "next/image";
import Link from "next/link";

interface ErrorPaymentProps {
  trackId: number;
}

const ErrorPayment = ({ trackId }: ErrorPaymentProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
      <div className="relative flex h-48 w-48 flex-col md:h-56 md:w-56 lg:h-64 lg:w-64">
        <Image
          src={errorImage}
          sizes="100vw"
          className="absolute object-cover object-center"
          alt="خرید موفق"
        />
      </div>
      <h1 className="h5-bold md:h4-bold text-error-300">
        پرداخت شما ناموفق بود
      </h1>
      <p className="body-md md:body-lg text-muted-950">
        کد رهگیری سفارش شما: {trackId}
      </p>
      <div className="flex items-center justify-between gap-x-6">
        <Link
          href={"/"}
          className="body-md bg-muted-100 px-3 py-1.5 text-primary-800"
        >
          بازگشت به صفحه اصلی
        </Link>
        <Link
          href={"/cart"}
          className="button-outline-primary body-md bg-muted-100 px-3 py-1.5"
        >
          پرداخت مجدد
        </Link>
      </div>
    </div>
  );
};

export default ErrorPayment;
