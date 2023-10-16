"use client";
import LoadingPage from "@/app/loading";
import Category from "@/components/ui/Category/Category";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import React from "react";

const PackagePage = () => {
  const { data, isLoading } = useCategoriesQuery({ limit: 100 });
  if (isLoading) return <LoadingPage />;
  return (
    <div>
      {data &&
        data?.map((category: any) => (
          <Category key={category.id} category={category} />
        ))}
    </div>
  );
};

export default PackagePage;
