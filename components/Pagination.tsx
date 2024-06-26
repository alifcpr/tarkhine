/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { formUrlQuery } from "@/utils";
import { ArrowLeft3, ArrowRight3 } from "iconsax-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type PaginationProps = {
  totalPage: number;
};

const Pagination = ({ totalPage }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageQuery = searchParams.get("page") ?? 1;

  const buttonsQuantity = Array.from({ length: totalPage }, (_, i) => i + 1);
  const [page, setPage] = useState<number>(+pageQuery);
  const [initialRender, setInitialRender] = useState<boolean>(false);

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (initialRender) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "page",
        value: String(page),
      });
      router.push(newUrl, { scroll: false });
    } else {
      setInitialRender(true);
    }
  }, [page, router, searchParams]);

  if (totalPage <= 1) {
    return null;
  }

  return (
    <div dir="ltr" className="mb-4 flex items-center justify-center gap-x-2 ">
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
          key={uuidv4()}
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
