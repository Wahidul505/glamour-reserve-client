import React from "react";

const BookingInfoCard = ({ label, data }: { label: string; data: any }) => {
  return (
    <>
      <label className="text-gray-600">{label}</label>
      <div className="text-lg mt-1 mb-4">{data}</div>
    </>
  );
};

export default BookingInfoCard;
