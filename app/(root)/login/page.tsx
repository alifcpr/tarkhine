"use client";

import LoginForm from "@/components/forms/LoginForm";
import RegisterCodeForm from "@/components/forms/RegiserCodeForm";
import useTitle from "@/hooks/useTitle";
import { useState } from "react";

const LoginPage = () => {
  // phone number value
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  // stepTwo === true (show RegisterCodeForm) stepTwo === false (show LoginForm)
  const [stepTwo, setStepTwo] = useState<boolean>(false);

  // page title
  useTitle("ورود به حساب کاربری");

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      {stepTwo ? (
        <RegisterCodeForm
          phoneState={phoneNumber}
          setPhoneState={setPhoneNumber}
          setStepTwo={setStepTwo}
        />
      ) : (
        <LoginForm
          phoneState={phoneNumber}
          setPhoneState={setPhoneNumber}
          setStepTwo={setStepTwo}
        />
      )}
    </div>
  );
};

export default LoginPage;
