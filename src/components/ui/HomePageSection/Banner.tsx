import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="relative md:grid md:grid-cols-2 items-center flex flex-col-reverse space-y-2 md:space-y-0 md:space-x-4">
          <Image
            src="https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg"
            alt=""
            height={500}
            width={500}
            className="shape w-52 h-52 md:w-72 lg:w-96 md:h-72 lg:h-96"
          />
          <div className="text-4xl md:text-5xl lg:text-8xl text-[#92140C] font-thin">
            <div>Makeover</div>{" "}
            <div className="md:ml-8">
              that you <br />
              love.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
