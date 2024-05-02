"use client";

import StepBar from "@/components/StepBar";
import { shoppingCartStepList } from "@/constants";
import useTitle from "@/hooks/useTitle";
import { getAllShopptingCartsApi } from "@/services/shopping_cart-services";
import { useQuery } from "@tanstack/react-query";
import ShoppingCart from "@/components/cards/ShoppingCart";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  // step state
  const [step, setStep] = useState<number>(1);

  // page title
  useTitle("سبد خرید");

  const { data, isLoading } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => await getAllShopptingCartsApi(),
  });

  return (
    <div className="mx-auto mb-10 max-w-sm px-4 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl xl:px-14 2xl:px-28">
      <div className="mx-auto flex justify-center md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl">
        <StepBar activeStep={step}>
          {shoppingCartStepList.map(({ text, Icon }, index: number) => (
            <StepBar.Step
              key={uuidv4()}
              index={index + 1}
              active={step >= index + 1}
              icon={<Icon className="h-7 w-7" />}
              onClick={() => setStep(index + 1)}
            >
              <StepBar.Text>{text}</StepBar.Text>
            </StepBar.Step>
          ))}
        </StepBar>
      </div>
      {isLoading && (
        <div className="flex h-[500px] w-full items-center justify-center">
          <ThreeDots />
        </div>
      )}
      {!isLoading && data && (
        <div className="mx-auto mt-10 grid  grid-cols-12 gap-x-6 xl:max-w-[1200px] 2xl:max-w-[1300px]">
          <div
            dir="ltr"
            className="col-span-12 flex h-[300px] flex-col gap-y-3 overflow-y-auto rounded-8 border-2 p-4 md:h-[400px] lg:col-span-7 lg:h-[500px]"
          >
            {data.data.map((cartData: any, index: number) => (
              <ShoppingCart data={cartData} key={uuidv4()} />
            ))}
          </div>
          <div className="col-span-12 h-max rounded-8 border-2 p-2 lg:col-span-5">
            f
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
