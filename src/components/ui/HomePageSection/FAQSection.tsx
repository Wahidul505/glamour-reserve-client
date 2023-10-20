"use client";
import LoadingPage from "@/app/loading";
import { useFAQsQuery } from "@/redux/api/faqApi";
import React, { useState } from "react";
import HomePageHeading from "./HomePageHeading";

const FAQSection = () => {
  const { data, isLoading } = useFAQsQuery(undefined);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (openItemIndex === index) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };
  if (isLoading) return <LoadingPage />;
  const faqData = data?.length > 8 ? data?.slice(0, 8) : data;
  return (
    <div>
      <HomePageHeading label="Frequently Ask Questions" />
      <div>
        {faqData &&
          faqData.map((item: any, index: number) => (
            <div className="accordion-item" key={index}>
              <div
                className="lg:text-lg font-semibold w-11/12 lg:w-full px-4 py-3 cursor-pointer my-1 bg-black bg-opacity-90 text-white rounded"
                onClick={() => toggleItem(index)}
              >
                {item?.question}
              </div>
              {openItemIndex === index && (
                <div className="text-black bg-gray-200 px-4 py-3 rounded my-2">
                  {item?.answer}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FAQSection;
