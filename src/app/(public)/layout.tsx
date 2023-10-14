import { IChildrenProps } from "@/types/common";
import React from "react";

const PublicPage = ({ children }: IChildrenProps) => {
  return <div>{children}</div>;
};

export default PublicPage;
