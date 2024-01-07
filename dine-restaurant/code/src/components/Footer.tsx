import Logo from "./Reusable/Logo";
import MaxWidthWrapper from "./Reusable/MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <MaxWidthWrapper>
        <Logo />
        <div className="footer__content">
          <div>
            <p>Marthwaite, Sedbergh</p>
            <p>Cumbria</p>
            <p>+00 44 123 4567</p>
          </div>
          <div>
            <p>Open Times</p>
            <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
