import Button from "../Resuable/Button";
import styles from "./Downloads.module.css";

interface Props {
  browser: string;
  minimumVersion: number;
  logo: string;
}

const Card = ({ logo, browser, minimumVersion }: Props) => {
  return (
    <div className={styles["download-card"]}>
      <div className={styles["download-card-info"]}>
        <img src={logo} alt="" />
        <h4>Add to {browser}</h4>
        <p>Minimum version {minimumVersion}</p>
      </div>
      <Button type="primary">Add & Install Extension</Button>
    </div>
  );
};

export default Card;
