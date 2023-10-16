import PublicHeader from "@/components/view/Header/PublicHeader/PublicHeader";
import { IChildrenProps } from "@/types/common";
import React from "react";

const PublicPage = ({ children }: IChildrenProps) => {
  return (
    <>
      <PublicHeader />
      <div className="pt-32">{children}</div>
    </>
  );
};

export default PublicPage;
