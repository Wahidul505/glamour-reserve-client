import ClientHeader from "@/components/view/Header/ClientHeader/ClientHeader";
import { IChildrenProps } from "@/types/common";
import React from "react";

const ClientLayout = ({ children }: IChildrenProps) => {
  return (
    <>
      <ClientHeader />
      <div className="mt-32">{children}</div>
    </>
  );
};

export default ClientLayout;
