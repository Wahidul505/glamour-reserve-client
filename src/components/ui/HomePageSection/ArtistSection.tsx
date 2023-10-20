import Image from "next/image";
import React from "react";
import HomePageHeading from "./HomePageHeading";

const ArtistSection = () => {
  const artists = [
    { img: "https://i.ibb.co/1ZRn62s/images-3.jpg", name: "Emily Anderson" },
    { img: "https://i.ibb.co/Br1C3vP/images-2.jpg", name: "Sophia Patel" },
    { img: "https://i.ibb.co/7ncnw92/images-1.jpg", name: "Olivia Martinez" },
    { img: "https://i.ibb.co/6WWKpR6/images.jpg", name: "Ana Williams" },
    { img: "https://i.ibb.co/FD13DC8/download-1.jpg", name: "Mia Johnson" },
    { img: "https://i.ibb.co/Q6wGJpd/download.jpg", name: "Isabella Davis" },
  ];
  return (
    <div>
      <HomePageHeading label="Artists" subLabel="about" />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {artists?.map((artist: any, index: number) => (
          <div key={index} className="lg:m-12 m-6">
            <div className="">
              <Image
                src={artist?.img}
                alt=""
                width={300}
                height={300}
                className="w-80 h-96"
              />
            </div>
            <h2 className="mt-3 text-gray-600">{artist?.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistSection;
