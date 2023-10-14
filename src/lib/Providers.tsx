import React from "react";
import StyledComponentsRegistry from "./AntdRegistry";
import { IChildrenProps } from "@/types/common";

const Providers = ({ children }: IChildrenProps) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};

export default Providers;
