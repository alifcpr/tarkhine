/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Oval } from "react-loader-spinner";
import Image from "next/image";
import ReactCodeInput from "react-code-input";
import toast from "react-hot-toast";
import Countdown, { zeroPad } from "react-countdown";
import { Clock } from "iconsax-react";
import axios from "axios";
import { useRouter } from "next/navigation";

type RegisterCodeFromProps = {
  phoneState: string;
  setPhoneState: Dispatch<SetStateAction<string>>;
  setStepTwo: Dispatch<SetStateAction<boolean>>;
};

const RegisterCodeForm = ({
  phoneState,
  setStepTwo,
  setPhoneState,
}: RegisterCodeFromProps) => {
  // isLoading for disable input and buttons
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // otp input value
  const [inputValue, setInputValue] = useState<string>("");
  // It becomes true when the code is wrong
  const [otpError, setOtpError] = useState<boolean>(false);
  // When it changes, the timer is reset
  const [reset, setRest] = useState<boolean>(false);
  // router
  const router = useRouter();

  // countDown ref for access to Api
  const countDownRef = useRef<any | null>(null);

  // handle otp input change
  const handleInputs = (inputVal: string) => {
    setInputValue(inputVal);
  };

  // It checks from api whether the verification code is correct or not
  const checkCode = async () => {
    setIsLoading(true);

    try {
      // eslint-disable-next-line no-unused-vars
      const { data } = await axios.post(
        "https://tarkhineh.liara.run/v1/auth/check-otp",
        { phone: phoneState, otpCode: +inputValue },
        { withCredentials: true }
      );

      router.replace("/");

      toast.success("کد درست بود خوش آمدی");
    } catch (error) {
      // catch error
      console.log(error);
      setOtpError(true);
      toast.error("کد وارد شده اشتباه است");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // reset Date.now() (when resetTimer change it's reset)
  const countDownTimer = useMemo(() => {
    return Date.now() + 1000 * 20;
  }, [reset]);

  // for change mobile phone
  const changeMobilePhone = () => {
    setPhoneState("");
    setStepTwo(false);
  };

  // Render the element based on the countdown timer
  const renderElement = ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: any;
    seconds: any;
    completed: any;
  }) => {
    if (completed) {
      return (
        <button onClick={resendCode} className="caption-lg text-primary-800">
          دریافت مجدد کد
        </button>
      );
    } else {
      return (
        <div className="caption-lg flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <span>تا دریافت مجدد کد</span>
            <span className="text-primary-800">{`${minutes}:${zeroPad(
              seconds
            )}`}</span>
          </div>
          <Clock className="h-4 w-4" />
        </div>
      );
    }
  };

  // reset countDown timer when reset state change
  useEffect(() => {
    if (countDownRef.current) countDownRef.current.start();
  }, [reset]);

  // resend another code for phoneNumber
  const resendCode = async () => {
    setRest((prev) => !prev);
    setIsLoading(true);

    try {
      // eslint-disable-next-line no-unused-vars
      const { data } = await axios.post(
        "https://tarkhineh.liara.run/v1/auth/resend-code",
        { phone: phoneState }
      );
      toast.success("کد تایید مجددا ارسال شد");
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // It automatically calls the sendCode function when the inputValue reaches 5 characters
  useEffect(() => {
    if (inputValue.length === 5) {
      checkCode();
    }
  }, [inputValue]);

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
        className="mt-20 flex flex-col items-center md:mt-10"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="h5-bold">کد تائید</h1>
        <p className="body-sm mt-2 text-muted-600">
          {`کد تایید پنج رقمی به شماره ${phoneState} ارسال شد`}
        </p>
        <div
          className="my-5 flex w-full flex-col items-center justify-center"
          dir="ltr"
        >
          <ReactCodeInput
            inputMode="numeric"
            fields={5}
            onChange={handleInputs}
            name={"opt-form"}
            className={`otp-form ${otpError && "otp-error"}`}
            disabled={isLoading}
          />
          <div className="mt-2 flex w-full items-center justify-between">
            <button onClick={changeMobilePhone} className="caption-lg">
              ویرایش شماره
            </button>
            <Countdown
              date={countDownTimer}
              renderer={renderElement}
              ref={countDownRef}
            />
          </div>
        </div>
        <button
          onClick={checkCode}
          disabled={isLoading || inputValue.length < 1}
          className="button-primary button-lg flex w-full items-center justify-center rounded-8 p-2"
        >
          {isLoading ? (
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
            "تایید"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegisterCodeForm;
