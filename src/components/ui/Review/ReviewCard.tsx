import Image from "next/image";
import React from "react";

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <article className="mb-6">
      <div className="flex items-center mb-4 space-x-4">
        <Image
          className="w-10 h-10 rounded-full"
          src={
            review?.user?.profileImg
              ? review?.user?.profileImg
              : "https://i.ibb.co/277qX6m/161007137-818106462117352-2772674974349771071-n.jpg"
          }
          alt=""
          width={300}
          height={300}
        />
        <div className="space-y-1 font-medium text-gray-800">
          <p>{review?.user?.name}</p>
        </div>
      </div>
      {review?.rating && (
        <div className="rating rating-sm">
          {Array.from({ length: Math.round(review?.rating) })?.map(
            (star, index) => (
              <input
                key={index}
                type="radio"
                disabled
                name="rating-1"
                className="mask mask-star"
              />
            )
          )}
        </div>
      )}
      <p className="mb-2 text-gray-600">{review?.review}</p>
    </article>
  );
};

export default ReviewCard;
