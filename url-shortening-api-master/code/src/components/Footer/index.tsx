import Logo from "../Resuable/Logo";
import Socials from "./Socials";
import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import FooterNavigation from "./FooterNavigation";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MaxWidthWrapper classes={`${styles.container}`}>
        <Logo classes={`${styles["footer-logo"]}`} />
        <div className={styles["inner-container"]}>
          <FooterNavigation />
          <Socials />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
