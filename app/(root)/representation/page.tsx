import GetAdviceForm from "@/components/forms/GetAdviceForm";
import RepresentationRequestForm from "@/components/forms/RepresentationRequestForm";
import AgencyAdvantages from "@/components/sections/representation/AgencyAdvantages";
import SectionData from "@/components/sections/representation/SectionData";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader
        title="همین الان به خانواده بزرگ ترخینه بپیوندید!"
        imageSrc="/assets/images/representation-banner.png"
      />
      <div className="px-4 lg:px-20">
        <SectionData />
        <AgencyAdvantages />
        <div className="border-b py-4 md:py-14">
          <h1 className="body-lg md:h4-bold text-center">دریافت مشاوره</h1>
          <GetAdviceForm />
        </div>
        <div className="my-14 rounded-8 border py-4 md:py-12">
          <h1 className="body-lg md:h4-bold text-center">
            فرم درخواست نمایندگی
          </h1>
          <RepresentationRequestForm />
        </div>
      </div>
    </>
  );
};

export default Page;
