import { ReactNode } from "react";
import styles from "./Statistics.module.css";

interface Props {
  children?: ReactNode;
}

const FeatureContainer = ({ children }: Props) => {
  return <div className={styles["card-container"]}>{children}</div>;
};

export default FeatureContainer;
