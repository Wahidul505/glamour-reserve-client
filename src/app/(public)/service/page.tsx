"use client";
import LoadingPage from "@/app/loading";
import ServiceCard from "@/components/ui/Service/ServiceCard";
import { useDebounce } from "@/hooks/useDebounce";
import { useServicesQuery } from "@/redux/api/serviceApi";
import React, { useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const ServicePage = () => {
  const query: Record<string, any> = {};
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["search"] = searchTerm;

  const debounce = useDebounce(searchTerm, 600);

  if (!!debounce) query["search"] = searchTerm;

  const { data, isLoading } = useServicesQuery({ ...query });
  if (isLoading) return <LoadingPage />;

  const handleSort = (order: string) => {
    setSortBy("price");
    setSortOrder(order);
  };

  return (
    <div>
      {/* search bar  */}
      <div className="lg:px-28 px-4">
        <h1 className="mb-3">Search your Suits</h1>
        <div className="flex">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="border border-gray-700 h-11 focus:border-gray-700 px-2 text-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <label className="swap ml-3">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* volume on icon */}
            <div
              className="swap-on fill-current flex items-center"
              onClick={() => handleSort("asc")}
            >
              Price
              <BiSolidUpArrow />
            </div>

            {/* volume off icon */}
            <div
              className="swap-off fill-current flex items-center"
              onClick={() => handleSort("desc")}
            >
              Price
              <BiSolidDownArrow />
            </div>
          </label>
        </div>
      </div>
      {/* all services  */}
      <div className="lg:px-28 px-4 py-20 mb-8 lg:mb-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {data &&
          data?.map((service: any) => (
            <ServiceCard
              key={service.id}
              service={service}
              theme="light"
              categoryTitle={true}
            />
          ))}
      </div>
    </div>
  );
};

export default ServicePage;
