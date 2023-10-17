import Navbar from "@/components/ui/Navbar/Navbar";
import { IChildrenProps } from "@/types/common";
import React from "react";

const PublicPage = ({ children }: IChildrenProps) => {
  return (
    <>
      <Navbar sidebar={true} />
      <div className="pt-32">{children}</div>
    </>
  );
};

export default PublicPage;
