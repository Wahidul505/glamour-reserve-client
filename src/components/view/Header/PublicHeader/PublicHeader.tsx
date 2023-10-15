import Navbar from "@/components/ui/Navbar/Navbar";
import React from "react";

const PublicHeader = () => {
  const centerItems = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "Packages", href: "/package" },
    { key: "3", label: "About us", href: "/about" },
    { key: "4", label: "Contact us", href: "/contact" },
    { key: "5", label: "Blogs", href: "/blog" },
    { key: "6", label: "FAQ", href: "/faq" },
  ];
  return <Navbar centerItems={centerItems} sidebar={false} />;
};

export default PublicHeader;
