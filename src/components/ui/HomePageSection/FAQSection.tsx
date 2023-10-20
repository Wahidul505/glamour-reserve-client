"use client";
import LoadingPage from "@/app/loading";
import { useFAQsQuery } from "@/redux/api/faqApi";
import React from "react";

const FAQSection = () => {
  const { data, isLoading } = useFAQsQuery(undefined);
  if (isLoading) return <LoadingPage />;
  const faqData = data?.length > 8 ? data?.slice(0, 8) : data;
  return (
    <div>
      {faqData &&
        faqData?.map((faq: any) => (
          <div key={faq?.id} className="collapse collapse-arrow bg-black">
            <input type="radio" name="my-accordion-2" checked={true} />
            <div className="collapse-title text-xl font-medium">
              {faq?.question}
            </div>
            <div className="collapse-content">
              <p>{faq?.answer}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FAQSection;
