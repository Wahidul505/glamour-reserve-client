import { baseApi } from "./baseApi";

const BOOKING_API = "/booking";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myBookings: build.query({
      query: (data) => ({
        url: `${BOOKING_API}/my-booking`,
        method: "GET",
      }),
    }),
    myBooking: build.query({
      query: (id) => ({
        url: `${BOOKING_API}/${id}/my-booking`,
        method: "GET",
      }),
    }),
  }),
});

export const { useMyBookingQuery, useMyBookingsQuery } = bookingApi;
