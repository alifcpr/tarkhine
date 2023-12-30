import { Edit2, Trash } from "iconsax-react";
import React from "react";

const AddressCard = () => {
  return (
    <div className="flex w-full flex-col gap-y-8 rounded-8 border border-muted-500 bg-muted-200 p-4 md:w-[49.7%]">
      <div className="flex items-center justify-between gap-x-4">
        <h1 className="caption-lg md:body-md line-clamp-1 text-muted-900">
          تهران: اقدسیه ، بزرگراه ارتش ، مجتمع شمیران سنتر ، طبقه 10
        </h1>
        <div className="flex gap-x-3">
          <Edit2 />
          <Trash />
        </div>
      </div>
      <div className="caption-md md:caption-lg flex items-center justify-between text-muted-800">
        <p>محل کار</p>
        <p>سردار وظیفه</p>
        <p dir="ltr">0912 786 4512</p>
      </div>
    </div>
  );
};

export default AddressCard;
