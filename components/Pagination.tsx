import { formUrlQuery } from "@/utils";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type PaginationProps = {
  totalPage: number;
};

const Pagination = ({ totalPage }: PaginationProps) => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page") ?? 1;

  const buttonsQuantity = Array.from({ length: totalPage }, (_, i) => i + 1);
  const [page, setPage] = useState<number>(+pageQuery);

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const newUrl = formUrlQuery({
      params: pathName.toString(),
      key: "page",
      value: String(page),
    });
    router.push(newUrl);
  }, [page, pathName, router]);

  if (totalPage <= 1) {
    return null;
  }

  return (
    <div
      dir="ltr"
      className="mb-4 flex h-[200px] items-end justify-center gap-x-2 "
    >
      <button
        onClick={prevPage}
        disabled={page === 1}
        className={`text-primary-800 ${
          page === 1 && "pointer-events-none opacity-60"
        }`}
      >
        <ArrowLeft3 size="32" />
      </button>
      {buttonsQuantity.map((button: number, index: number) => (
        <button
          onClick={() => setPage(button)}
          className={`h-8 w-8 rounded-full  ${
            page === +button
              ? "bg-primary-800 text-muted-100"
              : "bg-primary-200"
          }`}
          key={index}
        >
          {button}
        </button>
      ))}
      <button
        onClick={nextPage}
        className={`text-primary-800 ${
          page === buttonsQuantity.length && "pointer-events-none opacity-60"
        }`}
      >
        <ArrowRight3 size="32" />
      </button>
    </div>
  );
};

export default Pagination;
