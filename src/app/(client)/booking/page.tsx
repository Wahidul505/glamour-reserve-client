"use client";
import LoadingPage from "@/app/loading";
import { useMyBookingsQuery } from "@/redux/api/bookingApi";
import React from "react";

const BookingsPage = () => {
  const { data, isLoading } = useMyBookingsQuery(undefined);
  if (isLoading) return <LoadingPage />;

  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Time slot</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          {/* body  */}
          <tbody>
            {data &&
              data?.map((booking: any) => (
                <tr key={booking?.id}>
                  <th>{booking?.makeoverService?.title}</th>
                  <td>{booking?.makeoverService?.price}</td>
                  <td>{booking?.date}</td>
                  <td>
                    {booking?.startTime} - {booking?.endTime}
                  </td>
                  <td>{booking?.status}</td>
                  <td className="flex flex-col lg:flex-row">
                    <button className="btn btn-xs">View</button>
                    <button className="btn btn-xs btn-error mt-2 lg:mt-0 lg:ml-2">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsPage;
