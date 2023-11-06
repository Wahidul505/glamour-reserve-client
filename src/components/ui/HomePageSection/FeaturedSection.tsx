"use client";
import LoadingPage from "@/app/loading";
import React from "react";
import Heading from "../Heading/Heading";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import ServiceCategoryCard from "../Service/ServiceCategoryCard";
import ScrollContainer from "react-indiana-drag-scroll";

const FeaturedSection = () => {
  const { data, isLoading } = useCategoriesQuery({ limit: 100 });
  if (isLoading) return <LoadingPage />;

  return (
    <div>
      <Heading label="Packages" subLabel="Makeover" />
      <ScrollContainer
        className="w-full rounded border-solid border border-[#FFCF99] py-1 flex overflow-x-scroll"
        hideScrollbars={true}
      >
        {data &&
          data?.map((category: any) => (
            <div key={category?.id} className="carousel-item">
              <ServiceCategoryCard category={category} />
            </div>
          ))}
      </ScrollContainer>
      {/* <div className="carousel w-full rounded border-solid border border-[#FFCF99] py-1">
        {data &&
          data?.map((category: any) => (
            <div key={category?.id} className="carousel-item">
              <ServiceCategoryCard category={category} />
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default FeaturedSection;
