import Logo from "../Resuable/Logo";
import { Navigation } from "../Resuable/Navigation";
import Socials from "../Resuable/Socials";
import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MaxWidthWrapper classes={`${styles.container}`}>
        <Logo classes={`${styles["footer-logo"]}`} />
        <Navigation location="footer" />
        <Socials />
      </MaxWidthWrapper>
    </footer>
  );
};
