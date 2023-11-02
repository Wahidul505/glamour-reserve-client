"use client";
import LoadingPage from "@/app/loading";
import React from "react";
import Heading from "../Heading/Heading";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import ServiceCategoryCard from "../Service/ServiceCategoryCard";
import Image from "next/image";

const FeaturedSection = () => {
  const { data, isLoading } = useCategoriesQuery({ limit: 100 });
  if (isLoading) return <LoadingPage />;

  return (
    <div>
      <Heading label="Packages" subLabel="Makeover" />
      <div className="carousel w-full rounded border-solid border border-[#FFCF99] py-1">
        {data &&
          data?.map((category: any) => (
            <div key={category?.id} className="carousel-item">
              <ServiceCategoryCard category={category} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
