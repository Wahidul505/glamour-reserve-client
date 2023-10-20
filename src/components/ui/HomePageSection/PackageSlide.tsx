"use client";
import LoadingPage from "@/app/loading";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const PackageSlide = () => {
  const { data, isLoading } = useCategoriesQuery({ limit: 100 });
  if (isLoading) return <LoadingPage />;

  const categoryData = data?.slice(0, 3);
  const customCategoryData = [
    {
      title: "Bridal Makeover",
    },
    {
      title: "Reception | Walima Makeover",
    },
    {
      title: "Holud | Sangeet | Mehedi",
    },
  ];

  return (
    <div className="lg:block">
      {categoryData && categoryData?.length === 3 ? (
        <Carousel>
          {categoryData?.map((category: any) => (
            <div key={category.id}>
              <div className="w-full flex justify-end bg-[#151515]">
                <div
                  style={{
                    backgroundImage: `url(https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg)`,
                    height: "500px",
                  }}
                  className="w-3/4 overflow-auto bg-cover bg-center"
                ></div>
              </div>

              <div className="w-96 hidden lg:block bg-base-100 shadow-xl absolute bottom-20 left-28">
                <div className="card-body h-72 flex flex-col justify-around">
                  <h2 className="card-title lg:text-3xl font-mono">
                    {category?.title}
                  </h2>
                  <div className="card-actions justify-end">
                    <button className="btn btn-neutral">
                      See All Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <Carousel>
          {customCategoryData?.map((category: any, index: number) => (
            <div key={index}>
              <div className="w-full flex justify-end bg-[#151515]">
                <div
                  style={{
                    backgroundImage: `url(https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg)`,
                    height: "500px",
                  }}
                  className="w-3/4 overflow-auto bg-cover bg-center"
                ></div>
              </div>

              <div className="w-96 hidden lg:block bg-base-100 shadow-xl absolute bottom-20 left-28">
                <div className="card-body h-72 flex flex-col justify-around">
                  <h2 className="card-title lg:text-3xl font-mono">
                    {category?.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default PackageSlide;
