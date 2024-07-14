import React from "react";
import { ReactComponent as HeroIllustration } from "../../assets/illustration-intro.svg";
import Button from "../Reusable/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the
          larger team goals in view.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="hero__illustration">
        <HeroIllustration />
      </div>
    </section>
  );
};

export default Hero;
