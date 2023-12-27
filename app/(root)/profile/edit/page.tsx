import ProfileInfoForm from "@/components/forms/ProfileInfoForm";
import { ArrowRight2 } from "iconsax-react";
import React from "react";

const EditProfile = () => {
  return (
    <div>
      <div className="flex items-center justify-between font-estedad">
        <button>
          <ArrowRight2 className="h-7 w-7 md:hidden" />{" "}
        </button>
        <h1 className="h5-bold p-3 md:w-full md:border-b ">
          ویرایش اطلاعات شخصی
        </h1>
        <div></div>
      </div>
      <ProfileInfoForm type="Edit" />
    </div>
  );
};

export default EditProfile;
