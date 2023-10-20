"use client";
import LoadingPage from "@/app/loading";
import { useReviewsQuery } from "@/redux/api/reviewApi";
import React from "react";
import HomePageHeading from "./HomePageHeading";
import Image from "next/image";

const ReviewSection = () => {
  const { data, isLoading } = useReviewsQuery(undefined);
  if (isLoading) return <LoadingPage />;

  return (
    <div>
      <HomePageHeading label="Reviews" subLabel="client" />
      <div className="carousel carousel-center rounded-box">
        {data &&
          data?.map((review: any) => (
            <div
              key={review?.id}
              style={{ border: "1px solid black" }}
              className="carousel-item mx-3 h-64 bg-gray-100 rounded p-6 w-80 flex flex-col items-center overflow-hidden"
            >
              <Image
                src="https://i.ibb.co/277qX6m/161007137-818106462117352-2772674974349771071-n.jpg"
                alt=""
                width={300}
                height={300}
                className="w-12 h-12 rounded-full"
              />
              <h4 className="my-3">{review?.user?.name}</h4>
              <div>
                {review?.review?.length < 200
                  ? review?.review
                  : review?.review?.slice(0, 200) + "..."}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewSection;
