import React from "react";

const InfoHeading = ({ serial, label }: { serial: number; label: string }) => {
  return (
    <div className="flex mb-3 md:mb-5 border-b border-gray-500 pb-2 border-solid border-t-0 border-r-0 border-l-0">
      <div className="rounded-full h-5 w-5 md:h-7 md:w-7 bg-[#92140C] text-[#FFF8F0] flex justify-center items-center info font-semibold">
        {serial}
      </div>
      <div className="text-[#92140C] text-base md:text-lg lg:text-xl ml-2 md:ml-4">
        {label}{" "}
      </div>
    </div>
  );
};

export default InfoHeading;
