import { ReactNode } from "react";
import "./Reusable.css";

interface Props {
  children?: ReactNode;
  classes?: string;
}

const MaxWidthWrapper = ({ classes, children }: Props) => {
  return <div className={`${classes} max-width-wrapper`}>{children}</div>;
};

export default MaxWidthWrapper;
