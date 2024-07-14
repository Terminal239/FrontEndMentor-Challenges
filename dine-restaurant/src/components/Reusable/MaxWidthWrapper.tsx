import { ReactNode } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-width-wrapper">{children}</div>;
};

export default MaxWidthWrapper;
