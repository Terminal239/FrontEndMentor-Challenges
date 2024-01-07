"use client";
import { useState } from "react";
import Logo from "../Reusable/Logo";
import MaxWidthWrapper from "../Reusable/MaxWidthWrapper";
import Navigation from "../Reusable/Navigation";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Hamburger from "../../public/icons/hamburger.svg";
import Close from "../../public/icons/close.svg";

const Header = () => {
  const { width } = useWindowSize();
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  return (
    <header className={showNavigation && width! < 740 ? "visible" : ""}>
      <MaxWidthWrapper>
        {width! < 740 && (
          <button className="nav-toggle" onClick={() => setShowNavigation((prev) => !prev)}>
            <Image src={showNavigation ? Close : Hamburger} alt="menu toggle icons" width={20} height={20} />
          </button>
        )}
        <Logo />
        <Navigation location="header" />
        <div className="overlay"></div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
