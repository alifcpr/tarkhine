import HelpLinks from "@/components/HelpLinks";
import QuestionsList from "@/components/QuestionsList";
import PageHeader from "@/components/shared/PageHeader";
import { privacyQuestionsList } from "@/constants";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "حریم خصوصی کاربران ترخینه",
};

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
