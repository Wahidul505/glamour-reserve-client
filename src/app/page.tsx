import Navbar from "@/components/ui/Navbar/Navbar";
import FeaturedSection from "@/components/ui/HomePageSection/FeaturedSection";
import PackageSlide from "@/components/ui/HomePageSection/PackageSlide";
import React from "react";
import MakeupBlog from "@/components/ui/HomePageSection/MakeupBlog";
import GallerySection from "@/components/ui/HomePageSection/GallerySection";
import FAQSection from "@/components/ui/HomePageSection/FAQSection";

const MainPage = () => {
  return (
    <div>
      <Navbar sidebar={true} />
      <div className="pt-20">
        <PackageSlide />
        <div className="lg:px-28 px-4">
          <FeaturedSection />
          <MakeupBlog />
          <GallerySection />
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
