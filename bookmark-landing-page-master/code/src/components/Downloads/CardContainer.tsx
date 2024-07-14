import { ReactNode } from "react";
import styles from "./Downloads.module.css";

interface Props {
  children?: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return <div className={styles["card-container"]}>{children}</div>;
};

export default CardContainer;
