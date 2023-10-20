import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  service: any;
  theme: "dark" | "light";
  categoryTitle?: boolean;
}

const ServiceCard = ({ service, theme, categoryTitle = false }: IProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/service/${service?.id}`)}
      className="m-4 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <Image
          src={
            service?.image
              ? service?.image
              : "https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg"
          }
          alt=""
          width={300}
          height={300}
          className="w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div
          className={`absolute top-0 left-0 w-20 h-20 flex flex-col items-center justify-center ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <div className="text-base lg:text-lg">{service?.price}</div>
          <div
            className={`text-sm lg:text-base ${
              theme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            TK
          </div>
        </div>
      </div>
      <div
        className={`lg:text-xl uppercase mt-3 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {service?.title}
      </div>
      {categoryTitle && service?.category?.title && (
        <div className="mt-1 text-gray-600">{service?.category?.title}</div>
      )}
    </div>
  );
};

export default ServiceCard;
