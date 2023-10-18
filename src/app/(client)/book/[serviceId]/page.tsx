import React from "react";

const BookServicePage = ({ params }: { params: any }) => {
  const { serviceId } = params;
  return <div>{serviceId}</div>;
};

export default BookServicePage;
