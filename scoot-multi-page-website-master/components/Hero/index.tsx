import React from "react";
import MaxWidthWrapper from "../Reusable/MaxWidthWrapper";
import Button from "../Reusable/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <Image className="background" src="/images/home-hero-desktop.jpg" alt="man riding a scooter" height={650} width={1440} />
      <MaxWidthWrapper>
        <div className="hero__content">
          <h1>Scooter sharing made simple</h1>
          <div className="hero__text">
            <p>
              Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it
              with a tap, and you’re away!
            </p>
            <Button type="primary">Get Scootin</Button>
          </div>
          <Image className="pattern pattern-right-arrow" src="/patterns/right-arrow.svg" alt="man riding a scooter" height={151} width={452} />
          <Image className="pattern pattern-line" src="/patterns/line.svg" alt="man riding a scooter" height={15} width={1000} />
        </div>
      </MaxWidthWrapper>
      <Image className="pattern pattern-circle" src="/patterns/white-circles.svg" alt="man riding a scooter" height={63} width={234} />
    </section>
  );
};

export default Hero;
