import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import PrimaryNavigation from "./components/Navigation/Navigation";

import { ReactComponent as DesktopBackground } from "./assets/bg-simplify-section-desktop.svg";
import { ReactComponent as MobileBackground } from "./assets/bg-simplify-section-mobile.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as IconClose } from "./assets/icon-close.svg";
import { ReactComponent as IconOpen } from "./assets/icon-hamburger.svg";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import CallToAction from "./components/CallToAction/CallToAction";
import FooterNavigation from "./components/Navigation/FooterNavigation";
import FooterForm from "./components/Footer/FooterForm";
import MaxWidthContainer from "./components/Reusable/MaxWidthContainer";
import Button from "./components/Reusable/Button";
import Socials from "./components/Footer/Socials";
import { useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const [shownNavigation, setShowNavigation] = useState(false);
  const { height, width } = useWindowDimensions();

  const handleShowNavigation = () => {
    console.log("WORKS");
    setShowNavigation((prev) => !prev);
  };

  return (
    <>
      <Header>
        <MaxWidthContainer
          classes={["flex", "align-items-center", "justify-content-space-between"]}
        >
          <Logo />
          {(width > 864 || shownNavigation) && <PrimaryNavigation />}
          {width > 864 && <Button>Get Started</Button>}
          {width < 864 && (
            <Button classes={["button--navigation"]} handler={handleShowNavigation}>
              {!shownNavigation ? <IconOpen /> : <IconClose />}
            </Button>
          )}
        </MaxWidthContainer>
      </Header>
      <Main>
        <MaxWidthContainer>
          <Hero />
          <Features />
        </MaxWidthContainer>
        <Testimonials />
        <CallToAction>
          <MaxWidthContainer>
            <p className="call-to-action__text">Simplify how your team works today.</p>
            <Button classes={["button--inverted"]}>Get Started</Button>
          </MaxWidthContainer>
        </CallToAction>
      </Main>
      <Footer>
        <MaxWidthContainer>
          <Logo />
          <Socials />
          <FooterNavigation />
          <FooterForm />
          <p className="copyright-text"> Copyright 2020. All Rights Reserved</p>
        </MaxWidthContainer>
      </Footer>
      {width < 864 && shownNavigation && (
        <div onClick={() => setShowNavigation(false)} className="overlay" />
      )}
    </>
  );
}

export default App;
