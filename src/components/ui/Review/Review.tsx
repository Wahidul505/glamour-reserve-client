import React from "react";
import ReviewCard from "./ReviewCard";
import Form from "../Forms/Form";
import FormTextArea from "../Forms/FormTextArea";
import FormRatingInput from "../Forms/FormRatingInput";
import SubmitButton from "../Forms/SubmitButton";

const Review = ({
  reviewAndRatings,
  submitHandler,
  setRating,
}: {
  reviewAndRatings: any;
  submitHandler: any;
  setRating: any;
}) => {
  const ratingsArray = [1, 2, 3, 4, 5];
  return (
    <div className="lg:px-24 px-4">
      {reviewAndRatings &&
        reviewAndRatings?.map((review: any) => (
          <ReviewCard key={review?.id} review={review} />
        ))}

      <div>
        <h3 className="mb-3 mt-12">Add a Review</h3>
        <Form submitHandler={submitHandler}>
          <div className="rating mb-3">
            {ratingsArray?.map((el) => (
              <input
                key={el}
                type="radio"
                name="rating-1"
                className="mask mask-star"
                onClick={() => setRating(el)}
              />
            ))}
          </div>
          <FormTextArea name="review" />
          <SubmitButton label="Submit" />
        </Form>
      </div>
    </div>
  );
};

export default Review;
