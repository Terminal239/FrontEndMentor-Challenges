import { useWindowSize } from "@uidotdev/usehooks";
import Button from "../Resuable/Button";
import styles from "./Features.module.css";

interface Props {
  image: string;
  altText: string;
  title: string;
  content: string;
}

const FeatureTab = ({ image, altText, title, content }: Props) => {
  const { width } = useWindowSize();

  return (
    <div className={styles["feature-tab"]}>
      <div>
        <img src={image} alt={altText} />
      </div>
      <div className={styles["feature-info"]}>
        <h3>{title}</h3>
        <p>{content}</p>
        {width! > 768 && <Button type="primary">More info</Button>}
      </div>
    </div>
  );
};

export default FeatureTab;
