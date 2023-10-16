import Navbar from "@/components/ui/Navbar/Navbar";
import { commonCenterItems } from "@/constants/navbarItems";
import React from "react";

const PublicHeader = () => {
  const endItems = [
    { key: "1", label: "Create an Account", href: "/signUp" },
    { key: "2", label: "Login", href: "/login" },
  ];

  return (
    <Navbar
      centerItems={commonCenterItems}
      endItems={endItems}
      sidebar={true}
    />
  );
};

export default PublicHeader;
