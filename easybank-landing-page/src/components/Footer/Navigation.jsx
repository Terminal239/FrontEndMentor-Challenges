import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
