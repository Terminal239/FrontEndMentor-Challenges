import styles from "./Statistics.module.css";

interface Props {
  title: string;
  description: string;
  illustration: string;
  altText: string;
}

const FeatureCard = ({ title, description, illustration, altText }: Props) => {
  return (
    <div className={styles["feature-card"]}>
      <div className={styles["illustration"]}>
        <img src={illustration} alt={altText} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
