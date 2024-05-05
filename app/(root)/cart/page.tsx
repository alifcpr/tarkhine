"use client";

import StepBar from "@/components/StepBar";
import { shoppingCartStepList } from "@/constants";
import useTitle from "@/hooks/useTitle";
import {
  getAllShopptingCartsApi,
  sendToPaymentGateway,
} from "@/services/shopping_cart-services";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Oval, ThreeDots } from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";
import ShoppingCartsList from "@/components/ShoppingCartsList";
import Empty from "@/components/profile/Empty";
import ShoppingCartsInformation from "@/components/ShoppingCartsInformation";
import {
  AddCircle,
  DiscountShape,
  Location,
  ShoppingBag,
  Truck,
  TruckFast,
} from "iconsax-react";
import { getUserAddress } from "@/services/user.services";
import { useRouter, useSearchParams } from "next/navigation";
import AddressCard from "@/components/cards/AddressCard";
import Pagination from "@/components/Pagination";
import AddAddressForm from "@/components/forms/AddAddressForm";
import Modal from "@/components/shared/Modal";
import { ShoppingCartList, sendToPaymentGatewayParams } from "@/types/type";

import toast from "react-hot-toast";

interface AddressesContainerProps {
  values: { [key: string]: string };
  setValues: Dispatch<SetStateAction<{ [key: string]: string }>>;
}
const AddressesContainer = ({ values, setValues }: AddressesContainerProps) => {
  // modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page");

  const { data: addresses, isLoading } = useQuery({
    queryKey: ["address", pageQuery],
    queryFn: async () =>
      await getUserAddress({ page: pageQuery ? +pageQuery : 1, limit: 4 }),
    keepPreviousData: true,
  });

  const handleSelectAddress = (id: string) => {
    setValues((prev) => ({ ...prev, addressId: id }));
  };

  return (
    <>
      <Modal
        containerClasses="!block md:!flex"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Modal.Header
          titleClass="h7-semibold"
          containerClass="!bg-muted-400 px-5 py-4"
          onClose={() => setIsModalOpen(false)}
        >
          ثبت آدرس
        </Modal.Header>
        <Modal.Body containerClass="p-3 bg-muted-100">
          <AddAddressForm type="Add" closeModal={() => setIsModalOpen(false)} />
        </Modal.Body>
      </Modal>
      <div className="rounded-8 border-2 p-4">
        <div className="flex items-center justify-between border-b-2 pb-4">
          <div className="flex items-center gap-x-2">
            <Location />
            <p className="body-lg">آدرس ها</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-x-1 text-primary-800"
          >
            <AddCircle />
            <p className="body-md">افزودن آدرس</p>
          </button>
        </div>
        <div dir="ltr" className="max-h-[310px] min-h-max overflow-auto">
          {isLoading && (
            <div className="flex h-[200px] w-full items-center justify-center">
              <Oval
                width={40}
                height={40}
                wrapperClass={"text-white"}
                strokeWidthSecondary={10}
                strokeWidth={5}
                color={"#000"}
                secondaryColor={"#000"}
              />
            </div>
          )}
          {!isLoading &&
            addresses &&
            (addresses.data.length > 0 ? (
              <div className="flex flex-col justify-between">
                <div
                  dir="rtl"
                  className="mt-2 flex flex-wrap justify-between gap-y-3"
                >
                  {addresses.data.map((address: any) => (
                    <div
                      onClick={() => handleSelectAddress(address._id)}
                      className={`w-full cursor-pointer md:w-[49%] [&>div]:w-full ${
                        values.addressId === address._id &&
                        "rounded-8 [&>div]:border-primary-800"
                      }`}
                      key={uuidv4()}
                    >
                      <AddressCard addressData={address} />
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <Pagination totalPage={+addresses.maxPage} />
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center p-5">
                <Empty
                  title=" ! هنوز آدرسی ثبت نکردی"
                  btnLabel="ثبت آدرس"
                  setShow={() => setIsModalOpen(true)}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

interface StepOneProps {
  data: ShoppingCartList;
}
const StepOne = ({ data: orders }: StepOneProps) => {
  return <ShoppingCartsList data={orders.data} />;
};

interface StepTwoProps {
  values: { [key: string]: string };
  setValues: Dispatch<SetStateAction<{ [key: string]: string }>>;
}
const StepTwo = ({ values, setValues }: StepTwoProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 rounded-8 border-2 p-4 md:flex-row md:items-center md:justify-between md:py-10">
        <div className="body-md md:body-lg flex gap-x-2 border-b pb-4 md:border-b-0 md:pb-0">
          <Truck />
          <p>روش تحویل سفارش</p>
        </div>
        <div className="flex items-center gap-x-2">
          <input type="radio" checked id="motor" />
          <label htmlFor="motor" className="body-md flex gap-x-2">
            <p>ارسال توسط پیک</p>
            <TruckFast className="text-muted-800" />
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <input disabled type="radio" id="bag" />
          <label htmlFor="bag" className="body-md flex gap-x-2">
            <p>تحویل حضوری</p>
            <ShoppingBag className="text-muted-800" />
          </label>
        </div>
      </div>
      <div className="mt-4">
        <AddressesContainer values={values} setValues={setValues} />
      </div>
    </>
  );
};

interface StepThreeProps {
  values: { [key: string]: string };
  setValues: Dispatch<SetStateAction<{ [key: string]: string }>>;
  isLoading: boolean;
}
const StepThree = ({ isLoading, values, setValues }: StepThreeProps) => {
  // input change handler
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, discountCode: e.target.value }));
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 z-50 bg-muted-950/40 backdrop-blur-sm">
          <ThreeDots color="#fff" />
        </div>
      )}
      <div className="flex w-full flex-col rounded-8 border-2 p-3 md:flex-row md:justify-between md:p-6">
        <div className="flex items-center gap-x-2 border-b pb-3 md:border-none md:pb-0">
          <DiscountShape />
          <p className="body-md md:body-lg">ثبت کد تخفیف</p>
        </div>
        <div className="mt-3 flex w-full items-center justify-between gap-x-2 md:mt-0 md:w-max md:justify-normal">
          <input
            placeholder="کد تخفیف"
            value={values.discountCode}
            onChange={changeHandler}
            className="body-md rounded-4 border-2 px-3 py-1 focus:outline-none"
          />
          <button
            disabled={values.discountCode.length === 0}
            className="button-outline-primary px-3 py-1 disabled:px-3 disabled:py-1 disabled:opacity-50"
          >
            ثبت کد
          </button>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  // step state
  const [step, setStep] = useState<number>(1);

  // values state
  const [values, setValues] = useState<{ [key: string]: string }>({
    addressId: "",
    discountCode: "",
  });

  // page title
  useTitle("سبد خرید");

  // handle get all shoppingCarts from api
  const { data: orders, isLoading } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => await getAllShopptingCartsApi(),
    onSuccess: (data) => {
      if (+data.detail.cardQunatity === 0) setStep(1);
    },
  });

  // useRouter hook
  const router = useRouter();

  // handle send user to payment gate way
  const { mutate: sendToGatewayMutate, isLoading: isSendingLoading } =
    useMutation({
      mutationKey: ["payment-gateway"],
      mutationFn: async (params: sendToPaymentGatewayParams) =>
        sendToPaymentGateway(params),
      onSuccess: (data) => {
        toast.success("ارسال به درگاه خرید ...", { id: "gateway-loading" });
        router.replace(data.gatewayURL);
      },
      onError: () => {
        toast.error("مشکلی در ارسال به درگاه خرید به وجود آمده است", {
          id: "gateway-loading",
        });
      },
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
              disabled={isSendingLoading}
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
      {!isLoading &&
        orders &&
        (orders.data.length > 0 ? (
          <div className="mx-auto mt-10 grid  grid-cols-12 gap-x-6 xl:max-w-[1200px] 2xl:max-w-[1300px]">
            <div className="col-span-12 lg:col-span-7 ">
              {step === 1 && <StepOne data={orders} />}
              {step === 2 && <StepTwo values={values} setValues={setValues} />}
              {step === 3 && (
                <StepThree
                  values={values}
                  setValues={setValues}
                  isLoading={isSendingLoading}
                />
              )}
            </div>
            <div className="col-span-12 h-max rounded-8 border-2 p-2 lg:col-span-5">
              <ShoppingCartsInformation
                data={orders}
                step={step}
                setStep={setStep}
                isLoading={isSendingLoading}
                addressId={values.addressId}
                sendToGatewayFunc={() =>
                  sendToGatewayMutate({ addressId: values.addressId })
                }
              />
            </div>
          </div>
        ) : (
          <div className="mt-10 flex h-[500px] items-center justify-center rounded-8 border-2">
            <Empty
              title="شما درحال حاضر هیچ سفارشی ثبت نکرده اید !"
              btnLabel="منوی رستوران"
              href="/menu"
            />
          </div>
        ))}
    </div>
  );
};

export default Page;
