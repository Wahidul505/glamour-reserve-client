"use client";
import LoadingPage from "@/app/loading";
import AdditionalInformation from "@/components/ui/AdditionalInformation/AdditionalInformation";
import PrimaryButton from "@/components/ui/Button/PrimaryButton";
import Heading from "@/components/ui/Heading/Heading";
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
      <Heading label={data?.title} subLabel="Makeover Service" />
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 items-center justify-center md:mt-12">
        {/* image  */}
        <div>
          <div className="overflow-hidden">
            <Image
              src={
                data?.image
                  ? data?.image
                  : "https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg"
              }
              alt=""
              height={500}
              width={500}
              className="border-2 border-solid border-[#FFCF99] p-5 rounded-full w-56 h-72 lg:w-80  lg:h-96"
            />
          </div>
        </div>

        {/* details  */}
        <div>
          <div className="text-lg md:text-2xl text-[#92140C]">Details</div>
          <div className="mt-1">
            {data?.information &&
              data?.information?.map((info: string, index: number) => (
                <p key={index} className="text-sm md:text-base">
                  - {info}
                </p>
              ))}
          </div>
          <div className="text-lg md:text-2xl text-[#92140C] mt-3 md:mt-4">
            Category
          </div>
          <p className="text-sm md:text-base">
            {data?.category?.title ? data?.category?.title : ""}
          </p>
          <div className="text-lg md:text-2xl text-[#92140C] mt-3 md:mt-4">
            Price
          </div>
          <p className="text-sm md:text-base">{data?.price} TK</p>
          <div
            className="w-fit mt-3 md:mt-4"
            onClick={() => router.push(`/book/${data?.id}`)}
          >
            <PrimaryButton label="Book Now" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 lg:mt-20 mb-10">
        <button
          onClick={() => setLayout("additional-info")}
          className={`mx-3 border-none bg-transparent text-lg lg:text-2xl uppercase cursor-pointer text-[#1E1E24] ${
            layout === "additional-info" && "text-[#92140C]"
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setLayout("review")}
          className={`mx-3 border-none bg-transparent text-lg lg:text-2xl uppercase cursor-pointer text-[#1E1E24] ${
            layout === "review" && "text-[#92140C]"
          }`}
        >
          Reviews
        </button>
      </div>

      {layout === "additional-info" && data?.category?.information && (
        <div className="mt-3 text-[#1E1E24]">
          <AdditionalInformation
            information={data?.category?.information}
            textSize="lg:text-lg text-base"
          />
        </div>
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
