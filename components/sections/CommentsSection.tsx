"use client";
import React, { useState } from "react";
import { Comment } from "@/types/type";
import AddCommentForm from "../forms/AddCommentForm";
import useUser from "@/hooks/useUser";
import toast from "react-hot-toast";
import CommentCard from "../cards/CommentCard";
import Empty from "../profile/Empty";

type CommentsSectionProps = {
  comments: Comment[];
  foodId: string;
};

const CommentsSection = ({ comments, foodId }: CommentsSectionProps) => {
  const [show, setShow] = useState(false);
  // user information
  const { status } = useUser();

  // check user login state
  const handleShowForm = () => {
    if (status === "authorized") {
      setShow(true);
    } else {
      toast.error("ابتدا وارد حساب کاربری خود شوید !");
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <h1 className="body-lg md:body-xl xl:h4-bold">نظرات کاربران</h1>
        {!show && (
          <button
            onClick={handleShowForm}
            className="button-primary caption-lg rounded-4 p-2"
          >
            افزودن دیدگاه
          </button>
        )}
      </div>
      <div>{show && <AddCommentForm foodId={foodId} />}</div>
      {comments.length > 0 ? (
        <div className="flex flex-col gap-y-5">
          {comments.map((comment: any) => (
            <div key={comment._id}>
              <CommentCard data={comment} />
              {comment.reply && (
                <div className="mt-2 pr-10">
                  <CommentCard data={comment.reply} />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Empty
            title="هنوز دیدگاهی ثبت نشده !"
            btnLabel="افزودن دیدگاه"
            setShow={() => setShow(true)}
          />
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
