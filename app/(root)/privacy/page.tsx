import HelpLinks from "@/components/HelpLinks";
import QuestionsList from "@/components/QuestionsList";
import PageHeader from "@/components/shared/PageHeader";
import { privacyQuestionsList } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader
        title="حریم شخصی کاربران"
        imageSrc="/assets/images/privacy.png"
      />
      <HelpLinks />
      <QuestionsList questions={privacyQuestionsList} />
    </>
  );
};

export default Page;
