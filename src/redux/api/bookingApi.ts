import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const BOOKING_API = "/booking";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myBookings: build.query({
      query: (data) => ({
        url: `${BOOKING_API}/my-booking`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),

    myBooking: build.query({
      query: (id) => ({
        url: `${BOOKING_API}/${id}/my-booking`,
        method: "GET",
      }),
    }),

    cancelMyBooking: build.mutation({
      query: (id) => ({
        url: `${BOOKING_API}/${id}/my-booking`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.booking],
    }),

    bookingsByDate: build.query({
      query: (date) => ({
        url: `${BOOKING_API}/${date}/by-date`,
        method: "GET",
      }),
      providesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useMyBookingQuery,
  useMyBookingsQuery,
  useCancelMyBookingMutation,
  useBookingsByDateQuery,
} = bookingApi;
