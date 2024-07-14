import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MaxWidthWrapper = ({ children }: Props) => {
  return <div className="max-width-wrapper">{children}</div>;
};

export default MaxWidthWrapper;
