"use client";

import LoginForm from "@/components/forms/LoginForm";
import { useState } from "react";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [stepTwo, setStepTwo] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <LoginForm
        phoneState={phoneNumber}
        setPhoneState={setPhoneNumber}
        setStepTwo={setStepTwo}
      />
    </div>
  );
};

export default LoginPage;
