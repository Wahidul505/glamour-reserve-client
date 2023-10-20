"use client";
import LoadingPage from "@/app/loading";
import { useServicesQuery } from "@/redux/api/serviceApi";
import React from "react";
import ServiceCardHome from "../Service/ServiceCardHome";
import HomePageHeading from "./HomePageHeading";

const FeaturedSection = () => {
  const { data, isLoading } = useServicesQuery({ limit: 100 });
  if (isLoading) return <LoadingPage />;
  const serviceData = data?.slice(0, 3);

  return (
    <div className="lg:my-24 my-12">
      <HomePageHeading label="Featured" subLabel="Newly" />
      <div className="bg-white mb-8 lg:mb-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {serviceData &&
          serviceData?.map((service: any) => (
            <ServiceCardHome key={service.id} service={service} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
