import HelpLinks from "@/components/HelpLinks";
import QuestionsList from "@/components/QuestionsList";
import PageHeader from "@/components/shared/PageHeader";
import { tarkhineRuleQuestionsList } from "@/constants";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قوانین ترخینه",
};

const Page = () => {
  return (
    <>
      <PageHeader title="قوانین ترخینه" imageSrc="/assets/images/policy.png" />
      <HelpLinks />
      <QuestionsList questions={tarkhineRuleQuestionsList} />
    </>
  );
};

export default Page;
