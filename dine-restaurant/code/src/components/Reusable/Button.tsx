import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  type: "primary" | "secondary" | "tertiary";
  inForm: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ onClick, children, type, inForm }: Props) => {
  const classes = clsx({ button: true, [`button-${type}`]: true });

  return (
    <button onClick={onClick} type={inForm ? "submit" : "button"} className={classes}>
      {children}
    </button>
  );
};

export default Button;
