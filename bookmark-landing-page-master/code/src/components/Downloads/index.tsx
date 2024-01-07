import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import Card from "./Card";
import CardContainer from "./CardContainer";
import LogoChrome from "../../assets/logo-chrome.svg";
import LogoFirefox from "../../assets/logo-firefox.svg";
import LogoOpera from "../../assets/logo-opera.svg";

import styles from "./Downloads.module.css";

interface Browser {
  browser: string;
  minimumVersion: number;
  logo: string;
}

const BROWSER_DATA: Browser[] = [
  {
    browser: "chrome",
    minimumVersion: 62,
    logo: LogoChrome,
  },
  {
    browser: "firefox",
    minimumVersion: 55,
    logo: LogoFirefox,
  },
  {
    browser: "opera",
    minimumVersion: 46,
    logo: LogoOpera,
  },
];

export const Downlaods = () => {
  return (
    <section className="section-downloads">
      <MaxWidthWrapper classes={`${styles.container}`}>
        <div className={styles["downloads-text"]}>
          <h2>Download the extension</h2>
          <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </div>
        <CardContainer>
          {BROWSER_DATA.map((browser) => (
            <Card {...browser} />
          ))}
        </CardContainer>
      </MaxWidthWrapper>
    </section>
  );
};
