import React from "react";

const PrimaryButton = ({ label }: { label: string }) => {
  return (
    <button className="border border-[#15191E] bg-white cursor-pointer text-[#15191E] px-4 h-12 hover:bg-[#15191E] hover:text-white text-lg lg:text-xl transition-colors duration-200">
      {label}
    </button>
  );
};

export default PrimaryButton;
