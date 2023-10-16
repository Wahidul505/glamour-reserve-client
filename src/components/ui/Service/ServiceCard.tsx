import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ServiceCard = ({ service }: { service: any }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/service/${service?.id}`)}
      className="m-4 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <Image
          src="https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg"
          alt=""
          width={300}
          height={300}
          className="w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-0 left-0 bg-black w-20 h-20 flex flex-col items-center justify-center">
          <div className="text-white text-base lg:text-lg">
            {service?.price}
          </div>
          <div className="text-gray-400 text-sm lg:text-base">TK</div>
        </div>
      </div>
      <div className="text-white lg:text-xl uppercase mt-3">
        {service?.title}
      </div>
    </div>
  );
};

export default ServiceCard;
