import { ordersFilterList } from "@/constants";
import { formUrlQuery, removeUrlQuery } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface OrdersFiltersProps extends React.HTMLProps<HTMLDivElement> {
  buttonClassName?: string;
  buttonActiveClassName?: string;
}

const OrdersFilter = ({ buttonClassName, ...props }: OrdersFiltersProps) => {
  const searchParams = useSearchParams();
  const statusQuery = searchParams.get("status");
  const router = useRouter();

  const handleSetFilter = (value: string) => {
    return () => {
      if (statusQuery === value) {
        const newUrl = removeUrlQuery({
          key: "status",
          params: searchParams.toString(),
        });
        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = formUrlQuery({
          key: "status",
          params: searchParams.toString(),
          value,
        });
        router.push(newUrl);
      }
    };
  };

  return (
    <div
      className="flex items-center justify-between md:justify-normal md:gap-x-4"
      {...props}
    >
      {ordersFilterList.map((filterName: string) => (
        <button
          className={`body-md rounded-8 bg-muted-400 px-3 py-1 ${
            statusQuery === filterName && "bg-primary-200 text-primary-800"
          }`}
          key={uuidv4()}
          onClick={handleSetFilter(filterName)}
        >
          {filterName}
        </button>
      ))}
    </div>
  );
};

export default OrdersFilter;
