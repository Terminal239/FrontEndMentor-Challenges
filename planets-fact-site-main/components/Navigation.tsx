"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

const Navigation = () => {
  const { width } = useWindowSize();
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const selectedPlanet = usePathname().slice(1);

  return (
    <>
      <nav className={`${width! < 650 ? "mobile-navigation" : ""} ${width! < 650 && showNavigation && "transform"}`}>
        <ul>
          {planets.map((planet) => (
            <li key={planet} className={`${planet} ${planet === selectedPlanet ? "selected" : ""}`}>
              <Link href={`/${planet} `}>
                <span className="planet-color"></span>
                {planet.replace(planet.at(0)!, planet.at(0)!.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {width! < 650 && (
        <button onClick={() => setShowNavigation((prev) => !prev)} className={`toggle-nav ${showNavigation ? "sticky" : ""}`}>
          <Image src={showNavigation ? "/icon-chevron.svg" : "/icon-hamburger.svg"} alt="menu icon" height={24} width={24} />
        </button>
      )}
    </>
  );
};

export default Navigation;
