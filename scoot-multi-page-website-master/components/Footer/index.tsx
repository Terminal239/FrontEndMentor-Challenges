import Logo from "../Reusable/Logo";
import MaxWidthWrapper from "../Reusable/MaxWidthWrapper";
import Navigation from "../Reusable/Navigation";
import Social from "../Reusable/Social";

const Footer = () => {
  return (
    <footer>
      <MaxWidthWrapper>
        <Logo classes="light" />
        <Navigation location="footer" />
        <Social />
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
