import Button from "../Resuable/Button";
import IllustrationHero from "../../assets/illustration-working.svg";
import styles from "./Hero.module.css";
import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";

export const Hero = () => {
  return (
    <section className={styles["section-hero"]}>
      <MaxWidthWrapper classes={`${styles.container}`}>
        <div className={styles["hero-content"]}>
          <h1> More than just shorter links</h1>
          <p>Build your brand’s recognition and get detailed insights on how your links are performing. </p>
          <Button borderRadius={120} type="primary">
            Get started
          </Button>
        </div>
        <div className={styles["hero-image"]}>
          <img src={IllustrationHero} alt="image of a person working on a computer" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
