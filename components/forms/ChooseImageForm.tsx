"use client";
import React, { useState } from "react";
import UploadImageBox from "../UploadImageBox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import "react-circular-progressbar/dist/styles.css";
import CircleProgress from "../CircleProgress";
import { uploadProfileImageApi } from "@/services/user.services";

type ChooseImageFormProps = {
  setImage: any;
  imageState: any;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChooseImageForm = ({
  imageState,
  setImage,
  setIsModalOpen,
}: ChooseImageFormProps) => {
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  const queryClient = useQueryClient();
  const { mutate: uploadImageMutate, isLoading: isUploading } = useMutation({
    mutationKey: ["user"],
    mutationFn: async (file: FormData) => {
      await uploadProfileImageApi({ file, setLoadingProgress });
    },
    onSuccess: () => {
      toast.success("آپلود تصویر با موفقیت انجام شد");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      setLoadingProgress(0);
      setIsModalOpen(false);
      setImage("image", []);
    },
    onError: () => {
      toast.error("آپلود تصویر با مشکل مواجه شد");
    },
  });

  const uploadImageHandler = () => {
    const file = new FormData();
    file.append("image", imageState[0]);
    uploadImageMutate(file);
  };

  return (
    <div className="flex min-w-[200px] flex-col gap-y-2 md:min-w-[500px] xl:min-w-[600px]">
      <div className="relative">
        {isUploading && (
          <div
            dir="ltr"
            className="absolute inset-0 z-[9999] flex items-center justify-center bg-muted-950/50 backdrop-blur-sm"
          >
            <CircleProgress
              value={loadingProgress}
              styleClasses="w-1/2 h-1/2"
            />
          </div>
        )}
        <UploadImageBox
          setState={setImage}
          placeHolder="تصویر پروفایل خود را بارگزاری کنید"
          maxImage={1}
          maxWidth={800}
          maxHeight={800}
          previewImage={true}
          imageState={imageState}
          previewCardStyle="!w-full min-h-[300px] md:!min-h-[500px] lg:!min-h-[400px] 2xl:!min-h-[600px]"
          stateName="image"
        />
      </div>
      <div className="my-4 flex items-center justify-between">
        <button
          onClick={uploadImageHandler}
          disabled={isUploading || imageState.length < 1}
          className={`body-md md:body-lg smooth-transition rounded-4 px-3 py-1 text-primary-800 hover:bg-primary-200 ${
            imageState.length < 1 ||
            (isUploading && "pointer-events-none opacity-70")
          }`}
        >
          {imageState.length < 1
            ? "ابتدا تصویر را انتخاب کنید"
            : "بارگزاری تصویر"}
        </button>
        {imageState.length > 0 ? (
          <button
            onClick={() => setImage("image", [])}
            disabled={isUploading}
            className={`body-md smooth-transition md:body-lg rounded-4 px-2 py-1 text-error-200 hover:bg-error-100 ${
              isUploading && "pointer-events-none opacity-70"
            }`}
          >
            تغییر تصویر
          </button>
        ) : (
          <button
            onClick={() => setIsModalOpen(false)}
            className="body-md smooth-transition md:body-lg rounded-4 px-2 py-1 text-error-200 hover:bg-error-100"
          >
            انصراف
          </button>
        )}
      </div>
    </div>
  );
};

export default ChooseImageForm;
