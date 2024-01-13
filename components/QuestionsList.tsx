import React from "react";
import Accordian from "./Accordian";
import { Question } from "@/types/type.d";

type QuestionsProps = {
  questions: Question[];
};

const QuestionsList = ({ questions }: QuestionsProps) => {
  return (
    <div className="mx-3 my-4 rounded-8 border">
      <div>
        {questions.map((item: Question, index: number) => (
          <div key={index} className="border-b py-3 last:border-none">
            <Accordian
              title={item.title}
              titleClasses="text-muted-900 caption-md md:caption-lg lg:body-md xl:body-xl"
              contentClasses="caption-sm px-4 md:caption-md lg:body-sm xl:body-md"
              containerClasses="px-3"
              activeTitle="text-primary-800 !font-bold"
            >
              <p className="mt-2 text-justify leading-8 text-muted-800">
                {item.content}
              </p>
            </Accordian>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsList;
