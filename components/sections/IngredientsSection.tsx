import React from "react";

type IngredientsProps = {
  list: string[];
};

const IngredientsSection = ({ list }: IngredientsProps) => {
  return (
    <>
      <h1 className="body-lg md:body-xl xl:h4-bold">مواد اولیه</h1>
      <div className="mt-3 flex flex-wrap gap-2">
        {list.map((ingredient) => (
          <p
            key={ingredient}
            title={ingredient}
            className="caption-lg md:body-md w-fit rounded-8 bg-muted-300 px-5"
          >
            {ingredient}
          </p>
        ))}
      </div>
    </>
  );
};

export default IngredientsSection;
