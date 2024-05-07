import ContactCard from "@/components/cards/ContactCard";
import PageHeader from "@/components/shared/PageHeader";
import { branchList } from "@/constants";
import { BranchParams } from "@/types/type.d";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  return (
    <>
      <PageHeader
        title="با ترخینه در تماس باشید."
        imageSrc="/assets/images/contact-image.png"
      />

      <div className="my-10 flex flex-col gap-y-7 px-6 lg:px-12 xl:gap-y-6 xl:px-10 2xl:px-28">
        {branchList.map((item: BranchParams) => (
          <ContactCard branchData={item} key={uuidv4()} />
        ))}
      </div>
    </>
  );
};

export default Page;
