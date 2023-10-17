import Navbar from "@/components/ui/Navbar/Navbar";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { clientItems } from "@/constants/linkItems";
import { IChildrenProps } from "@/types/common";
import React from "react";

const ClientLayout = ({ children }: IChildrenProps) => {
  return (
    <>
      <Navbar sidebar={false} />
      <div className="mt-20 flex">
        <Sidebar items={clientItems} />
        <div className="p-12">{children}</div>
      </div>
    </>
  );
};

export default ClientLayout;
