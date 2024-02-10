"use client";
import { addCommentApi } from "@/services/comment.services";
import { customeStyles } from "@/utils";
import { commentValidation } from "@/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "@smastrom/react-rating";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";

type AddCommentFormProps = {
  foodId: string;
};

const AddCommentForm = ({ foodId }: AddCommentFormProps) => {
  // form handler
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      commentText: "",
      rate: 0,
    },
    resolver: yupResolver(commentValidation),
  });

  // api handler
  const queryClient = useQueryClient();
  const { mutate: commentMutateHandler, isLoading: isAdding } = useMutation({
    mutationKey: ["foods"],
    mutationFn: async ({
      foodId,
      text,
      rate,
    }: {
      foodId: string;
      text: string;
      rate: number;
    }) => await addCommentApi({ foodId, text, rate }),

    onSuccess: () => {
      toast.success(
        "دیدگاه شما منتشر شد و پس از تایید ادمین به نمایش خواهد درآمد"
      );
      queryClient.invalidateQueries({ queryKey: ["foods"] });
      reset();
    },
    onError: () => {
      toast.error("مشکلی در ارسال دیدگاه پیش آمده ، مجددا امتحان کنید");
    },
  });

  // call api
  const handleSendComment = async (data: any) => {
    commentMutateHandler({ foodId, text: data.commentText, rate: data.rate });
  };

  return (
    <form
      onSubmit={handleSubmit((data) => handleSendComment(data))}
      className="flex w-full flex-col gap-y-3"
    >
      <div className="flex items-center justify-end gap-x-2">
        {errors.rate && (
          <span className="caption-lg text-error-200">
            {errors.rate.message}
          </span>
        )}
        <Controller
          control={control}
          name="rate"
          render={({ field: { onChange, onBlur, value } }) => (
            <Rating
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              itemStyles={customeStyles}
              className="!w-32"
              isDisabled={isAdding}
            />
          )}
        />
      </div>
      <textarea
        className="input-gray-outline caption-lg md:body-md p-2"
        placeholder="دیدگاه خود را بنویسید"
        disabled={isAdding}
        {...register("commentText")}
      ></textarea>
      {errors.commentText && (
        <span className="caption-lg text-error-200">
          {errors.commentText.message}
        </span>
      )}
      <div className="flex items-center justify-end">
        <button
          disabled={isAdding}
          className="button-primary caption-lg md:body-md w-full rounded-4 px-2 py-1 md:w-max"
        >
          {isAdding ? (
            <Oval
              width={80}
              height={25}
              strokeWidth={4}
              secondaryColor="#fff"
              color="#fff"
            />
          ) : (
            "ارسال دیدگاه"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
