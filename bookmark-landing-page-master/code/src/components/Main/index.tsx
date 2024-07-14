import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Main = ({ children }: Props) => {
  return <div>{children}</div>;
};
