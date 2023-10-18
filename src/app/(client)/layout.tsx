"use client";
import Navbar from "@/components/ui/Navbar/Navbar";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { clientItems } from "@/constants/linkItems";
import { getUserInfo } from "@/services/auth.service";
import { IChildrenProps } from "@/types/common";
import React, { useEffect, useState } from "react";
import LoadingPage from "../loading";
import { useRouter } from "next/navigation";

const ClientLayout = ({ children }: IChildrenProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const user = getUserInfo() as any;
  const router = useRouter();

  useEffect(() => {
    if (user?.role !== "client" && !user?.userId) {
      router.push("/login");
    }
    setIsLoading(false);
  }, [router, user?.userId, user?.role]);

  if (isLoading) return <LoadingPage />;

  return (
    <>
      <Navbar sidebar={false} />
      <div className="mt-20 flex">
        <Sidebar items={clientItems} />
        <div className="lg:p-12 p-6">{children}</div>
      </div>
    </>
  );
};

export default ClientLayout;
