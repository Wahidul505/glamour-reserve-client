import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";

const PublicHeader = () => {
  const items = [
    { key: "1", label: "Packages", href: "/feedback" },
    { key: "2", label: "About us", href: "/about" },
    { key: "3", label: "Contact us", href: "/contact" },
    { key: "4", label: "FAQ", href: "/faq" },
    { key: "5", label: "Blogs", href: "/blogs" },
  ];
  return <Navbar items={items} />;
};

export default PublicHeader;
