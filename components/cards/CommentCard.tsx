import { Comment } from "@/types/type";
import { customeStyles } from "@/utils";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import React from "react";

type CommentCardProps = {
  data: Comment;
};

const CommentCard = ({ data }: CommentCardProps) => {
  const { author, rate, text } = data;
  const { family, imageUrl, name, role } = author[0];
  return (
    <div
      className={`${
        role === "admin" ? "bg-muted-400" : "bg-muted-300"
      } rounded-8 px-3 py-2`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-64 bg-muted-500 shadow-md md:h-14 md:w-14">
            <Image
              src={imageUrl || "/assets/images/userDefaultProfile.png"}
              fill
              sizes="100vw"
              alt="نظر"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <h1 className="caption-lg md:body-md flex items-center gap-x-1">
              <span>
                {name} {family}
              </span>
            </h1>
            <p className="caption-md md:body-sm">3 روز پیش</p>
          </div>
        </div>
        <div className="-scale-x-100">
          <Rating
            className="!w-24 md:!w-28"
            value={rate}
            itemStyles={customeStyles}
            readOnly
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="caption-lg md:body-md">{text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
