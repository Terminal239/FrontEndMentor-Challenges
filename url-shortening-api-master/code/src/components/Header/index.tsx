import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";

import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import Logo from "../Resuable/Logo";
import Button from "../Resuable/Button";
import Navigation from "./Navigation";

import styles from "./Header.module.css";

export const Header = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const { width } = useWindowSize();

  return (
    <header className={`${styles.header}`}>
      <MaxWidthWrapper classes={`${styles["container"]} ${width! < 768 && styles["mobile-navigation"]}`}>
        <Logo />
        {(showNavigation || width! > 768) && (
          <div className={`${width! < 768 ? styles["inner-container-mobile-navigation"] : styles["inner-container"]}`}>
            <Navigation />
            <div className={styles["header-actions"]}>
              <Button borderRadius={8} spacing={{ block: 4, inline: 24 }} type="tertiary">
                Login
              </Button>
              <Button borderRadius={120} spacing={{ block: 4, inline: 24 }} type="primary">
                Sign Up
              </Button>
            </div>
          </div>
        )}
        {width! < 768 && (
          <button onClick={() => setShowNavigation((prev) => !prev)}>
            {!showNavigation ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path fill="#242A45" fillRule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                <path
                  fill="#242A45"
                  fillRule="evenodd"
                  d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
                />
              </svg>
            )}
          </button>
        )}
      </MaxWidthWrapper>
    </header>
  );
};
