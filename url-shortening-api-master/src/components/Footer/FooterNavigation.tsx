import styles from "./Footer.module.css";

const FooterNavigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles["navigation-column"]}>
        <p>Features</p>
        <ul>
          <li>
            <a href="#">Link Shortening</a>
          </li>
          <li>
            <a href="#">Branded Links</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
        </ul>
      </div>
      <div className={styles["navigation-column"]}>
        <p>Resources</p>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>
      <div className={styles["navigation-column"]}>
        <p>Company</p>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNavigation;
