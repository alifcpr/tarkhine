"use client";
import { LogoutCurve } from "iconsax-react";
import { useState } from "react";
import Modal from "./Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutApi } from "@/services/user.services";
import { Oval } from "react-loader-spinner";
import toast from "react-hot-toast";

type LogOutProps = {
  textClasses?: string;
  iconClasses?: string;
  containerClasses?: string;
};

const LogOut = ({
  textClasses,
  iconClasses,
  containerClasses,
}: LogOutProps) => {
  // modal state
  const [open, setOpen] = useState<boolean>(false);

  // for call logout api
  const queryCilent = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["user"],
    mutationFn: async () => await logOutApi(),
    onSuccess: () => {
      toast.success("از حساب کاربری خود خارج شدید");
      queryCilent.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("از حساب کاربری خود خارج نشدید مجددا امتحان کنید");
    },
  });

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center rounded-4 bg-muted-100 p-4">
            <Oval />
            <p className="caption-lg md:body-md mt-5">
              درحال خروج از حساب کاربری...
            </p>
          </div>
        ) : (
          <div className="mx-4 flex flex-col gap-y-2 rounded-4 bg-muted-100 p-4 text-center shadow-lg md:mx-0">
            <p className="body-md md:body-lg">
              آیا مطمئن هستید که میخواهید از{" "}
              <span className="font-semibold">حساب کاربری</span> خود خارج شوید ؟
            </p>
            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={() => setOpen(false)}
                className="caption-lg md:body-md smooth-transition rounded-4 px-3 py-1 text-error-300 hover:bg-error-100"
              >
                خیر
              </button>
              <button
                onClick={() => mutate()}
                className="caption-lg md:body-md smooth-transition rounded-4 px-3 py-1 text-primary-800  hover:bg-primary-100"
              >
                خروج از حساب
              </button>
            </div>
          </div>
        )}
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className={`flex items-center gap-x-2 ${containerClasses}`}
      >
        <LogoutCurve className={iconClasses} />
        <span className={textClasses}>خروج از حساب</span>
      </button>
    </>
  );
};

export default LogOut;
