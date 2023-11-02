import Image from "next/image";
import React from "react";
import Heading from "../Heading/Heading";

const CapsuleBanner = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10 items-center justify-between">
      <div className="lg:w-1/2">
        <p className="text-[#92140C] uppercase mb-3">Makeup Studio</p>
        <h1 className=" mb-4 md:mb-8 text-[#1E1E24] lg:text-3xl uppercase font-normal">
          Glamour Reserve
        </h1>
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
            src="https://i.ibb.co/VH7p5rZ/161018501-270327164650205-2623597865623769501-n.jpg"
            alt=""
            height={350}
            width={350}
            className="border-2 border-solid border-[#FFCF99] p-5 rounded-full w-64 h-72 lg:w-auto lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CapsuleBanner;
