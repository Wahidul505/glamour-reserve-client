import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
  service: any;
  categoryTitle?: boolean;
}

const ServiceCardHome = ({ service }: IProps) => {
  const router = useRouter();
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full my-6 lg:my-0">
      <figure>
        <Image
          src={
            service?.image
              ? service?.image
              : "https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg"
          }
          alt=""
          width={300}
          height={300}
        />
      </figure>
      <div className="card-body grid grid-cols-1 grid-rows-3">
        <h1 className="card-title lg:text-3xl">{service?.title}</h1>
        <p>{service?.price} TK</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => router.push(`/service/${service?.id}`)}
            className="btn btn-neutral"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardHome;
