import React, { ReactNode } from "react";

interface Props {
  type: "primary" | "secondary" | "tertiary";
  classes?: string;
  children: ReactNode;
}

const Button = ({ children, type, classes }: Props) => {
  return <button className={`button-${type}`}>{children}</button>;
};

export default Button;
