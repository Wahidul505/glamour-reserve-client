import React from "react";
import StyledComponentsRegistry from "./AntdRegistry";

interface IProps {
  children: React.ReactElement | React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};

export default Providers;
