import { ReactNode } from "react";
import "./Reusable.css";

interface Props {
  children?: ReactNode;
  type: "primary" | "secondary" | "tertiary";
  spacing?: {
    inline?: 4 | 8 | 16 | 24 | 32 | 40 | number;
    block?: 4 | 8 | 16 | 18 | 24 | 28 | 32 | number;
  };
  borderRadius: 120 | 8;
  classes?: string;
  inForm?: boolean;
  onButtonClick?: () => void;
}

const Button = ({ onButtonClick, borderRadius, inForm, classes, spacing, children, type }: Props) => {
  return (
    <button
      onClick={onButtonClick}
      type={inForm ? "submit" : "button"}
      style={{ paddingBlock: spacing?.block, paddingInline: spacing?.inline, borderRadius: borderRadius }}
      className={`${classes} button button-${type}`}
    >
      {children}
    </button>
  );
};

export default Button;
