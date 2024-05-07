"use client";
import { bytesToMegabytes } from "@/utils";
import { Add, FolderAdd } from "iconsax-react";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import NextImage from "next/image";

type UploadImageBoxProps = {
  setState: any;
  maxWidth: number;
  maxHeight: number;
  placeHolder: string;
  imageState: any;
  stateName: string;
  previewImage: boolean;
  previewCardStyle?: string;
  maxImage: number;
};

const UploadImageBox = ({
  stateName,
  maxWidth,
  maxHeight,
  placeHolder,
  imageState,
  setState,
  previewImage,
  previewCardStyle,
  maxImage,
}: UploadImageBoxProps) => {
  // drag state for change style
  const [isDrag, setIsDrag] = useState<boolean>(false);
  // input file state
  const inputRef = useRef<HTMLInputElement | null>(null);

  // open input file when click on box
  const openFiles = () => {
    inputRef.current?.click();
  };

  // Validating the file and adding it to the state
  const checkImageFile = (data: FileList) => {
    const file = data[0];
    const imageSize = +bytesToMegabytes(file.size);
    const allowedTypes = ["png", "jpg", "jpeg"];
    if (!allowedTypes.includes(file.name.split(".")[1])) {
      toast.error("فقط مجاز به آپلود فایل هایی با فرمت های نام برده شده هستید");
      return;
    }
    if (imageSize > 5) {
      toast.error("حجم عکس باید زیر 5 مگابایت باشد");
      return;
    }
    const fileData = new Image();
    fileData.src = URL.createObjectURL(file);
    fileData.onload = () => {
      if (fileData.width >= maxWidth && fileData.height >= maxHeight) {
        toast.error(
          `عرض تصویر باید حداقل ${maxWidth} پیکسل و ارتفاع آن ${maxHeight} پیکسل باشد`
        );
        return;
      }
      setState(stateName, [...imageState, file]);
    };
  };

  // call when input change
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFile = e.target.files;
    inputFile && checkImageFile(inputFile);
  };

  // change style of box when drag over the box
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  // get file from box when drop the file and change style
  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const inputFile = e.dataTransfer.files;
    setIsDrag(false);
    inputFile && checkImageFile(inputFile);
  };

  // when drag end , change style
  const handleOnDragEnd = () => {
    setIsDrag(false);
  };

  // remove image from box
  const removeImage = (index: number) => {
    return () => {
      const newImage = [...imageState];
      newImage.splice(index, 1);
      setState(stateName, newImage);
    };
  };

  return (
    <div className="flex w-full flex-col">
      {maxImage !== imageState.length && (
        <div
          onClick={openFiles}
          onDragOver={handleDragOver}
          onDrop={handleOnDrop}
          onDragLeave={handleOnDragEnd}
          className="smooth-transition flex min-h-[300px] w-full cursor-pointer items-center justify-center rounded-8 border-2 bg-muted-500 hover:bg-muted-200 hover:text-muted-600"
        >
          {isDrag ? (
            <h1 className="caption-lg md:body-md mt-2">عکس را رها کنید</h1>
          ) : (
            <>
              <input
                onChange={inputChangeHandler}
                type="file"
                ref={inputRef}
                accept=".jpg, .jpeg, .png"
                hidden
              />
              <div className="flex flex-col items-center">
                <FolderAdd className="h-20 w-20" />
                <p className="caption-lg md:body-md mt-2">{placeHolder}</p>
                <span className="caption-sm md:caption-md mt-2 w-10/12 text-center">
                  آپلود تصویر با حجم حداکثر 5 مگابایت، حداقل ابعاد {maxWidth} در
                  {maxHeight}
                  پیکسل و فرمت‌های jpeg، jpg، png مجاز می‌باشد
                </span>
              </div>
            </>
          )}
        </div>
      )}

      {previewImage && (
        <div className="mt-2 flex w-full flex-wrap items-center justify-evenly gap-y-3">
          {imageState.map((item: File, index: number) => {
            const imageUrl = URL.createObjectURL(item);
            return (
              <div
                key={uuidv4()}
                className={`relative min-h-[150px] w-5/12 overflow-hidden ${previewCardStyle}`}
              >
                <span className="absolute left-0 top-0 z-40 h-12 w-full bg-gradient-to-r from-muted-900 to-transparent "></span>
                <button
                  type="button"
                  onClick={removeImage(index)}
                  className="absolute left-4 top-2 z-50 rounded-64"
                >
                  <Add className="h-9 w-9 rotate-45 text-muted-100" />
                </button>
                <NextImage
                  key={index}
                  src={imageUrl}
                  fill
                  className="h-full w-full"
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  alt={item.name}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UploadImageBox;
