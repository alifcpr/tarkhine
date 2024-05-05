"use client";
import ErrorPayment from "@/components/payment/ErrorPayment";
import SuccessPayment from "@/components/payment/SuccessPayment";
import React, { useLayoutEffect, useState } from "react";

interface PaymentInfo {
  status: number;
  trackId: number;
  success: number;
}

const Page = () => {
  // initial state
  const [initial, setInitial] = useState(false);
  // query state
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    status: 0,
    trackId: 0,
    success: 0,
  });

  // remove all queries 
  useLayoutEffect(() => {
    setTimeout(() => {
      window.history.replaceState(null, "", window.location.pathname);
    }, 10);

    const Url = new URL(window.location.href);
    setPaymentInfo({
      status: Number(Url.searchParams.get("status")) ?? 0,
      success: Number(Url.searchParams.get("success")) ?? 0,
      trackId: Number(Url.searchParams.get("trackId")) ?? 0,
    });

    setTimeout(() => {
      setInitial(true);
    }, 200);
  }, []);

  return (
    <div className="h-[600px]">
      {initial &&
        (paymentInfo.success === 1 ? (
          <SuccessPayment trackId={paymentInfo.trackId} />
        ) : (
          <ErrorPayment trackId={paymentInfo.trackId} />
        ))}
    </div>
  );
};

export default Page;
