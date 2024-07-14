import { useWindowSize } from "@uidotdev/usehooks";
import Logo from "../Resuable/Logo";
import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import { Navigation } from "../Resuable/Navigation";
import Socials from "../Resuable/Socials";
import Button from "../Resuable/Button";
import { useState } from "react";

import styles from "./Header.module.css";

export const Header = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const { width } = useWindowSize();

  return (
    <header className={styles.header}>
      <MaxWidthWrapper classes={`${styles["container"]} ${showNavigation && width! < 768 && styles["mobile-navigation"]}`}>
        <Logo classes={showNavigation && width! < 768 ? "dark" : ""} />
        {(showNavigation || width! > 768) && (
          <>
            <Navigation location="header" />
            <Button classes={`${styles["button-login"]} ${styles["mobile-navigation"]}`} spacing={{ block: 16, inline: 32 }} type="secondary">
              Login
            </Button>
          </>
        )}
        {width! < 768 && (
          <button className="btn-show-nav" onClick={() => setShowNavigation((prev) => !prev)}>
            {showNavigation ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                <path
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
                <path fill="#242A45" fill-rule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z" />
              </svg>
            )}
          </button>
        )}
        {showNavigation && width! < 768 && <Socials />}
      </MaxWidthWrapper>
    </header>
  );
};
