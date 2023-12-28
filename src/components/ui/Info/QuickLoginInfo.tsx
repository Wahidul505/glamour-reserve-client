import React from "react";
import toast from "react-hot-toast";
import QuickLoginInfoCard from "./QuickLoginInfoCard";

const QuickLoginInfo = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied");
  };
  return (
    <div className=" rounded text-[#1E1E24] p-2 md:p-3 lg:p-4">
      <div className="text-lg md:text-xl lg:text-2xl right-0 top-0 mb-3">
        Quick Login Credentials
      </div>
      <div className="mb-3">
        <div className="text-base md:text-lg lg:text-xl mb-1 text-[#92140C]">
          User Login
        </div>
        <QuickLoginInfoCard handleCopy={handleCopy} text="test@gmail.com" />
        <QuickLoginInfoCard handleCopy={handleCopy} text="1234qwerQWER" />
      </div>
      <div className="mb-3">
        <div className="text-base md:text-lg lg:text-xl mb-1 text-[#92140C]">
          Admin Login
        </div>
        <QuickLoginInfoCard handleCopy={handleCopy} text="admin@gmail.com" />
        <QuickLoginInfoCard handleCopy={handleCopy} text="admin505" />
      </div>
    </div>
  );
};

export default QuickLoginInfo;
