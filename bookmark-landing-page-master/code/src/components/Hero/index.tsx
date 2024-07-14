import Button from "../Resuable/Button";
import IllustrationHero from "../../assets/illustration-hero.svg";
import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles["section-hero"]}>
      <MaxWidthWrapper classes={`${styles.container}`}>
        <div className={styles["hero-text"]}>
          <h1>A Simple Bookmark Manager</h1>
          <p className={styles["hero-paragraph"]}>
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className={styles["hero-action-container"]}>
            <Button type="primary">Get it on Chrome</Button>
            <Button type="tertiary">Get it on Firefox</Button>
          </div>
        </div>
        <div className="hero-image">
          <img src={IllustrationHero} alt="image of an application running on a tablet" />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
