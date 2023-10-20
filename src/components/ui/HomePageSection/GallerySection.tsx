import Image from "next/image";
import React from "react";
import HomePageHeading from "./HomePageHeading";

const GallerySection = () => {
  const images = [
    "https://i.ibb.co/277qX6m/161007137-818106462117352-2772674974349771071-n.jpg",
    "https://i.ibb.co/qdSsyMc/161063313-450019086420226-6282566191397973582-n.jpg",
    "https://i.ibb.co/VH7p5rZ/161018501-270327164650205-2623597865623769501-n.jpg",
    "https://i.ibb.co/5RCy2p8/161523695-1190131451407538-855977099500025136-n.jpg",
    "https://i.ibb.co/9WLqXvH/162044866-494105921752427-2053151397308435679-n.jpg",
    "https://i.ibb.co/Kx0MBjW/161458103-804714766803585-5018531988672904671-n.jpg",
  ];

  return (
    <div>
      <HomePageHeading label="Gallery" subLabel="Makeup" />
      <div className="carousel carousel-center rounded-box">
        {images?.map((img: string, index: number) => (
          <div key={index} className="carousel-item">
            <Image src={img} alt="" width={300} height={300} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
