import HelpLinks from "@/components/HelpLinks";
import PageHeader from "@/components/shared/PageHeader";
import { faqQuestionsList } from "@/constants";
import React from "react";

import { Metadata } from "next";
import QuestionsList from "@/components/QuestionsList";

export const metadata: Metadata = {
  title: "سوالات متداول از ترخینه",
};

const Page = () => {
  return (
    <>
      <PageHeader
        title="سوالات متداول از ترخینه"
        imageSrc="/assets/images/faq-image.jpg"
      />
      <HelpLinks />
      <QuestionsList questions={faqQuestionsList} />
    </>
  );
};

export default Page;
