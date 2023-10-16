"use client";
import LoadingPage from "@/app/loading";
import AdditionalInformation from "@/components/ui/AdditionalInformation/AdditionalInformation";
import ReviewCard from "@/components/ui/Review/ReviewCard";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import Image from "next/image";
import React, { useState } from "react";

const ServiceDetailsPage = ({ params }: { params: any }) => {
  const { id } = params;
  const [layout, setLayout] = useState("additional-info");
  const { data, isLoading } = useSingleServiceQuery(id as string);
  if (isLoading) return <LoadingPage />;

  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {/* image  */}
        <div className="bg-black lg:p-8 p-4 flex justify-center items-center pt-20">
          <div>
            <div className="overflow-hidden">
              <Image
                src="https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <h2 className="text-gray-300 mt-4 uppercase">{data?.title}</h2>
            <p className="text-gray-500 mt-3">{data?.category?.title}</p>
          </div>
        </div>

        {/* details  */}
        <div className="lg:p-8 p-4">
          <h1 className="lg:text-4xl text-xl font-normal text-black uppercase">
            {data?.title}
          </h1>
          <div className="text-gray-700 mt-3 text-lg lg:text-xl mb-5">
            {data?.price} TK
          </div>
          <h4 className="text-xl">Details</h4>
          <hr />
          <div className="mt-3">
            {data?.information &&
              data?.information?.map((info: string, index: number) => (
                <p key={index} className="lg:text-lg">
                  • {info}
                </p>
              ))}
          </div>
          <div className="flex mt-6 lg:mt-8">
            <button className="border border-[#15191E] bg-white cursor-pointer text-[#15191E] px-4 h-12 hover:bg-[#15191E] hover:text-white text-lg lg:text-xl transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 lg:mt-20 mb-10">
        <button
          onClick={() => setLayout("additional-info")}
          className={`mx-3 border-none bg-transparent text-lg lg:text-2xl uppercase cursor-pointer text-gray-700 ${
            layout === "additional-info" && "underline"
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setLayout("review")}
          className={`mx-3 border-none bg-transparent text-lg lg:text-2xl uppercase cursor-pointer text-gray-700 ${
            layout === "review" && "underline"
          }`}
        >
          Reviews
        </button>
      </div>

      {layout === "additional-info" && data?.category?.information && (
        <AdditionalInformation information={data?.category?.information} />
      )}

      <div className="lg:px-24 px-4">
        {layout === "review" &&
          data?.reviewAndRatings &&
          data?.reviewAndRatings?.map((review: any) => (
            <ReviewCard key={review?.id} review={review} />
          ))}
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
