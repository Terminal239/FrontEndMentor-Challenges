import { ReactNode } from "react";
import "./Reusable.css";

interface Props {
  children?: ReactNode;
  type: "primary" | "secondary" | "tertiary";
  spacing?: {
    inline: 16 | 24 | 32 | number;
    block: 16 | 24 | 32 | number;
  };
  classes?: string;
  inForm?: boolean;
}

const Button = ({ inForm, classes, spacing, children, type }: Props) => {
  return (
    <button type={inForm ? "submit" : "button"} style={{ paddingBlock: spacing?.block, paddingInline: spacing?.inline }} className={`${classes} button button-${type}`}>
      {children}
    </button>
  );
};

export default Button;
