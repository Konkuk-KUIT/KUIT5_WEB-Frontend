import React from "react";
import { SkyBlueBotton } from "../styles/ButtonStyle";

const Button2 = ({ children, ...props }) => {
  return <SkyBlueBotton {...props}>{children}</SkyBlueBotton>;
};

export default Button2;
