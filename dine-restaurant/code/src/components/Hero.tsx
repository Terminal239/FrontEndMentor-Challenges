import { Link } from "react-router-dom";
import Button from "./Reusable/Button";
import Logo from "./Reusable/Logo";
import MaxWidthWrapper from "./Reusable/MaxWidthWrapper";

const Hero = () => {
  return (
    <header className="hero">
      <MaxWidthWrapper>
        <div className="hero__content">
          <div className="hero__logo">
            <Logo />
          </div>
          <div className="hero__text">
            <h1>Exquisite dining since 1989</h1>
            <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
            <Link to={"/contact"}>
              <Button inForm={false} type="secondary">
                Book a table
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Hero;
