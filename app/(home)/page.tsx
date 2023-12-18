import CategoryCard from "@/components/cards/CategoryCard";
import BannerSlider from "@/components/shared/BannerSlider";
import { categoryItems } from "@/constants";
import { CategoryItems } from "@/types/type.d";
import React from "react";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <section className="mt-12 flex flex-col gap-y-14 px-4 md:gap-y-16 lg:gap-y-20 xl:gap-y-28">
        <h1 className="h5-bold  lg:h4-bold text-center">منوی رستوران</h1>
        <div className="mx-4 grid grid-cols-12 gap-x-4 gap-y-20 md:gap-x-10 md:gap-y-24  xl:mx-28">
          {categoryItems.map((category: CategoryItems, index: number) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
