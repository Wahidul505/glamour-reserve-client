import Navbar from "@/components/ui/Navbar/Navbar";
import PackageSlide from "@/components/ui/Package/PackageSlide";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <Navbar sidebar={true} />
      <div className="mt-20">
        <PackageSlide />
      </div>
    </div>
  );
};

export default MainPage;
