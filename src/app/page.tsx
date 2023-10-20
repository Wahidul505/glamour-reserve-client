import Navbar from "@/components/ui/Navbar/Navbar";
import FeaturedSection from "@/components/ui/HomePageSection/FeaturedSection";
import PackageSlide from "@/components/ui/HomePageSection/PackageSlide";
import React from "react";
import MakeupBlog from "@/components/ui/HomePageSection/MakeupBlog";
import GallerySection from "@/components/ui/HomePageSection/GallerySection";
import FAQSection from "@/components/ui/HomePageSection/FAQSection";
import ReviewSection from "@/components/ui/HomePageSection/ReviewSection";
import ArtistSection from "@/components/ui/HomePageSection/ArtistSection";

const MainPage = () => {
  return (
    <div>
      <Navbar sidebar={true} />
      <div className="pt-20">
        <PackageSlide />
        <div className="lg:px-28 px-4">
          <div className="lg:my-32 my-12">
            <FeaturedSection />
          </div>
          <div className="lg:my-32 my-12">
            <MakeupBlog />
          </div>
          <div className="lg:my-32 my-12">
            <GallerySection />
          </div>
          <div className="lg:my-32 my-12">
            <FAQSection />
          </div>
          <div className="lg:my-32 my-12">
            <ReviewSection />
          </div>
          <div className="lg:my-32 my-12">
            <ArtistSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
