import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const REVIEW_URL = "/review";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postReview: build.mutation({
      query: (data) => ({
        url: REVIEW_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const { usePostReviewMutation } = reviewApi;
