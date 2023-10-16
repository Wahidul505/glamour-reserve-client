import Navbar from "@/components/ui/Navbar/Navbar";
import { commonCenterItems } from "@/constants/navbarItems";
import React from "react";

const ClientHeader = () => {
  const endItems = [
    { key: "1", label: "Profile", href: "/profile" },
    { key: "2", label: "Bookings", href: "/bookings" },
    { key: "3", label: "Feedback", href: "/feedback" },
  ];

  return (
    <Navbar
      centerItems={commonCenterItems}
      endItems={endItems}
      sidebar={true}
    />
  );
};

export default ClientHeader;
