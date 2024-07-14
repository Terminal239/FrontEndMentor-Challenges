import { useWindowSize } from "@uidotdev/usehooks";
import styles from "./Header.module.css";

const Navigation = () => {
  const { width } = useWindowSize();

  return (
    <nav className={`${width! < 768 ? styles["mobile-navigation"] : styles.navigation}`}>
      <ul>
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
