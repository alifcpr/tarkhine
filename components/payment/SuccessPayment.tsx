import Image from "next/image";
import React from "react";
import successImage from "@/public/assets/images/paymentSuccess.png";
import Link from "next/link";

interface SuccessPaymentProps {
  trackId: number;
}

const SuccessPayment = ({ trackId }: SuccessPaymentProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 bg-[url(/assets/images/Selebration.png)] bg-[length:150%_100%] bg-center md:bg-[length:100%_100%] xl:bg-[length:90%_120%]">
      <div className="relative flex h-48 w-48 flex-col md:h-56 md:w-56 lg:h-64 lg:w-64">
        <Image
          src={successImage}
          sizes="100vw"
          className="absolute object-cover object-center"
          alt="خرید موفق"
        />
      </div>
      <h1 className="h5-bold md:h4-bold text-primary-800">
        پرداخت شما با موفقیت انجام شد
      </h1>
      <p className="body-md md:body-lg text-primary-800">
        کد رهگیری سفارش شما: {trackId}
      </p>
      <div className="flex items-center justify-between gap-x-6">
        <Link
          href={"/"}
          className="button-outline-primary body-md bg-muted-100 px-3 py-1.5"
        >
          بازگشت به صفحه اصلی
        </Link>
        <Link
          href={"/orders"}
          className="button-primary body-md rounded-4 px-5 py-1.5"
        >
          پیگیری سفارش
        </Link>
      </div>
    </div>
  );
};

export default SuccessPayment;
