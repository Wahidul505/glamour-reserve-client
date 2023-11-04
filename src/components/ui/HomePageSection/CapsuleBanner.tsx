import Image from "next/image";
import React from "react";
import Heading from "../Heading/Heading";
import HeadingStart from "../Heading/HeadingStart";

const CapsuleBanner = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 items-center justify-between">
      <div className="lg:w-1/2">
        <div className="hidden md:block">
          <HeadingStart label="Glamour Reserve" subLabel="Makeover Studio" />
        </div>
        <div className="block md:hidden">
          <Heading label="Glamour Reserve" subLabel="Makeover Studio" />
        </div>
        <div className="text-lg md:text-xl text-[#1E1E24]">
          Experience beauty and transformation at our makeover studio. Our
          professionals enhance your natural beauty with dream makeovers. Book
          now to look and feel your best!
        </div>
      </div>
      {/* image  */}
      <div>
        <div className="overflow-hidden ">
          <Image
            src="https://i.ibb.co/GkWdWWh/Beauty-Test-Model-Sonia-Ben-Ammar-Test-Drives-4-Minimal-Makeup-Looks.jpg"
            alt=""
            height={350}
            width={350}
            className="border-2 border-solid border-[#FFCF99] p-5 rounded-full w-64 h-72 lg:w-80 lg:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default CapsuleBanner;
