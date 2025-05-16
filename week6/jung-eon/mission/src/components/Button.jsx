import React from "react";
import { BlueBotton } from "../styles/ButtonStyle";

const Button = ({ children, ...props }) => {
  return <BlueBotton {...props}>{children}</BlueBotton>;
};

export default Button;
