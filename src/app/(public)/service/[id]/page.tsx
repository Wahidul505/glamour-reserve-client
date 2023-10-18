"use client";
import LoadingPage from "@/app/loading";
import AdditionalInformation from "@/components/ui/AdditionalInformation/AdditionalInformation";
import PrimaryButton from "@/components/ui/Button/PrimaryButton";
import Review from "@/components/ui/Review/Review";
import { usePostReviewMutation } from "@/redux/api/reviewApi";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/services/auth.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ServiceDetailsPage = ({ params }: { params: any }) => {
  const { id } = params;
  const [layout, setLayout] = useState("additional-info");
  const [rating, setRating] = useState<number | null>(null);
  const { data, isLoading } = useSingleServiceQuery(id as string);
  const [postReview] = usePostReviewMutation();
  const router = useRouter();

  if (isLoading) return <LoadingPage />;
  const { userId } = getUserInfo() as any;

  const handleReviewSubmit = async (data: any) => {
    try {
      if (rating) data.rating = rating;
      if (userId) data.userId = userId;
      if (id) data.makeoverServiceId = id;
      const res = await postReview(data).unwrap();
      res
        ? toast.success("Review posted")
        : toast.error("We already received your review");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {/* image  */}
        <div className="bg-black lg:px-8 lg:py-16 p-4 flex justify-center items-center pt-20">
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
            <div
              className="w-fit"
              onClick={() => router.push(`/book/${data?.id}`)}
            >
              <PrimaryButton label="Book Now" />
            </div>
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

      {layout === "review" && (
        <Review
          reviewAndRatings={data?.reviewAndRatings}
          submitHandler={handleReviewSubmit}
          setRating={setRating}
          userId={userId}
        />
      )}
    </div>
  );
};

export default ServiceDetailsPage;
