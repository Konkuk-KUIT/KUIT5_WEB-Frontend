import React from "react";
import styles from "./Button.module.scss";

type Props = {
  text: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const Button = ({ text, onClick, size = "medium" }: Props) => {
  return <button className={`${styles.button} ${styles[size]}`}>{text}</button>;
};

export default Button;
