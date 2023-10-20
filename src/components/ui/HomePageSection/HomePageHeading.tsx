import React from "react";

const HomePageHeading = ({
  label,
  subLabel,
}: {
  label: string;
  subLabel?: string;
}) => {
  return (
    <>
      {subLabel && (
        <p className="text-center text-gray-600 uppercase">{subLabel}</p>
      )}
      <h1 className="text-center mb-6 text-black lg:text-3xl uppercase">
        {label}
      </h1>
    </>
  );
};

export default HomePageHeading;
