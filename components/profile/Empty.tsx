import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

type EmptyProps = {
  title: string;
  btnLabel: string;
  href?: string;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
};

const Empty = ({ title, btnLabel, href, setOpenModal }: EmptyProps) => {
  return (
    <div className="relative flex h-[250px] w-[250px] flex-col items-center justify-center">
      <Image
        src={"/assets/images/Spider.png"}
        width={200}
        height={200}
        alt="not found icon"
        className="absolute inset-0 -z-50 h-full w-full opacity-40"
      />
      <div className="flex w-full flex-col items-center justify-center space-y-10">
        <h1 className="body-md md:body-xl whitespace-nowrap text-muted-700">
          {title}
        </h1>
        {href ? (
          <Link
            className="button-outline-primary button-lg w-full bg-white p-2 text-center text-primary-800"
            href={href}
          >
            {btnLabel}
          </Link>
        ) : (
          <button
            onClick={
              setOpenModal && !href ? () => setOpenModal(true) : () => {}
            }
            className="button-outline-primary button-lg w-full bg-white p-2 text-primary-800"
          >
            {btnLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Empty;
