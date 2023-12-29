"use client";
import React from "react";
import BookingInfoCard from "./BookingInfoCard";

const BookingDetailsAdmin = ({ booking }: { booking: any }) => {
  return (
    <div className="card-side bg-base-100 z-0 ">
      <div className="card-body ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-2">
          <div>
            <h3>Booking Details</h3>
            <div className="mt-6">
              <BookingInfoCard
                label="Service"
                data={booking?.makeoverService?.title}
              />
              <BookingInfoCard
                label="Category"
                data={booking?.makeoverService?.category?.title}
              />
              <BookingInfoCard label="Date" data={booking?.date} />
              <BookingInfoCard
                label="Slot"
                data={`${booking?.startTime} - ${booking?.endTime}`}
              />
              <BookingInfoCard label="Status" data={booking?.status} />
            </div>
          </div>
          <div>
            <h3>User Details</h3>
            <div className="mt-6">
              <BookingInfoCard label="Name" data={booking?.user?.name} />
              <BookingInfoCard label="Email" data={booking?.user?.email} />
              <BookingInfoCard
                label="Contact Number"
                data={booking?.contactNo}
              />
              <BookingInfoCard
                label="Alternative Contact Number"
                data={booking?.alternativeContactNo}
              />
              <BookingInfoCard label="Address" data={booking?.user?.address} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsAdmin;
