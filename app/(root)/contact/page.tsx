import ContactCard from "@/components/cards/ContactCard";
import PageHeader from "@/components/shared/PageHeader";
import { branchList } from "@/constants";
import { BranchParams } from "@/types/type.d";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader
        title="با ترخینه در تماس باشید."
        imageSrc="/assets/images/contact-image.png"
      />

      <div className="my-10 flex flex-col gap-y-7 px-6 lg:px-12 xl:gap-y-6 xl:px-10 2xl:px-28">
        {branchList.map((item: BranchParams, index: number) => (
          <ContactCard branchData={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Page;
