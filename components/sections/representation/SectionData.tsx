import { representationSectionsData } from "@/constants";
import { Bank, Book, Chart, EmptyWallet } from "iconsax-react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const SectionData = () => {
  // Icon rendering according to data type
  const renderIcon = (type: string) => {
    switch (type) {
      case "bank":
        return <Bank className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20" />;
      case "empyWallet":
        return (
          <EmptyWallet className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20" />
        );
      case "chart":
        return <Chart className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20" />;
      case "book":
        return <Book className="h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20" />;
    }
  };

  return (
    <section className="flex flex-wrap items-center justify-center gap-y-4 border-b-2 py-4 md:py-14 xl:gap-x-9">
      {representationSectionsData.map((item: any) => (
        <div
          key={uuidv4()}
          className="flex w-1/2 flex-col flex-wrap items-center px-3 xl:w-auto"
        >
          <div className="rounded-full border-2 border-primary-800 p-3 text-primary-800 md:p-4 lg:border-4 lg:p-6 xl:p-8">
            {renderIcon(item.icon)}
          </div>
          <span className="caption-lg md:body-md xl:body-lg mt-2 text-center">
            {item.title}
          </span>
        </div>
      ))}
    </section>
  );
};

export default SectionData;
