// @ts-nocheck
import { Fragment, useState, useEffect } from "react";
import useWindowDimensions from "./utilities/useWindowDimensions";
import heroIllustration from "./assets/image-mockups.png";
import HeroImage from "./components/Hero/HeroImage.jsx";
import HeaderNavigation from "./components/Navigation/Navigation.jsx";
import FooterNavigation from "./components/Footer/Navigation.jsx";
import Header from "./components/Header/Header.jsx";
import Button from "./components/Reusable/Button.jsx";
import HeroText from "./components/Hero/HeroText.jsx";
import Logo from "./components/Reusable/Logo.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Features from "./components/Features/Features";
import FeaturesText from "./components/Features/FeaturesText";
import FeaturesBlock from "./components/Features/FeaturesBlock";
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Social from "./components/Footer/Social";
import hamburger from "./assets/icon-hamburger.svg";
import menuClose from "./assets/icon-close.svg";

import "./components/Reusable/Request.css";
import styles from "./utils.module.css";
import data from "./assets/data.json";
import Navigation from "./components/Footer/Navigation.jsx";

function App() {
  const [shownNavigation, setShowNavigation] = useState(false);
  const { height, width } = useWindowDimensions();

  const handleShowNavigation = () => {
    setShowNavigation((prev) => !prev);
  };

  return (
    <Fragment>
      {shownNavigation && <div className={styles.overlay}></div>}
      <Header>
        <Logo />
        {(width > 768 || shownNavigation) && <HeaderNavigation />}
        {width > 768 && <Button styles={["btn-request"]}>Request Invite</Button>}
        {width < 768 && (
          <Button handler={handleShowNavigation} styles={["btn-navigation"]}>
            <img src={shownNavigation ? menuClose : hamburger} alt="hamburger icon" />
          </Button>
        )}
      </Header>
      <main>
        <Hero>
          <HeroImage
            imageUrl={heroIllustration}
            imageAlt={"different screens of the app developed for easybank"}
          />
          <HeroText />
        </Hero>
        <Features>
          <FeaturesText />
          <FeaturesBlock />
        </Features>
        <Articles />
      </main>
      <Footer>
        <div>
          <Logo />
          <Social />
        </div>
        <Navigation />
        <div>
          <Button styles={["btn-request"]}>Request Invite</Button>{" "}
          <p> © Easybank. All Rights Reserved</p>
        </div>
      </Footer>
    </Fragment>
  );
}

export default App;
