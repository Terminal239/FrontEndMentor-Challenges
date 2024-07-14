import Button from "../Resuable/Button";
import styles from "./CTA.module.css";

export const CTA = () => {
  return (
    <section className={styles["section-cta"]}>
      <div className={styles.container}>
        <p>Boost your links today</p>
        <Button borderRadius={120} type="primary">
          Get Started
        </Button>
      </div>
    </section>
  );
};
