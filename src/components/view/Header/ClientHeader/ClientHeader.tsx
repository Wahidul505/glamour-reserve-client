import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";

const ClientHeader = () => {
  const items = [
    { key: "1", label: "Bookings", href: "/bookings" },
    { key: "2", label: "Profile", href: "/profile" },
  ];
  return (
    <>
      <Navbar items={items} />
    </>
  );
};

export default ClientHeader;
