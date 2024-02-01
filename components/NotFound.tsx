import Image from "next/image";
import React from "react";

type NotFoundProps = {
  title: string;
};

const NotFound = ({ title }: NotFoundProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-y-5">
      <h1 className="body-lg">{title}</h1>
      <Image
        src={"/assets/images/NotFoundImage.png"}
        width={300}
        height={300}
        alt={title}
      />
    </div>
  );
};

export default NotFound;
