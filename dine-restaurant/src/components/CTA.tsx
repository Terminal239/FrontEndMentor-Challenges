import { Link } from "react-router-dom";
import Button from "./Reusable/Button";
import MaxWidthWrapper from "./Reusable/MaxWidthWrapper";

const CTA = () => {
  return (
    <section className="cta">
      <MaxWidthWrapper>
        <h2>Ready to make a reservation?</h2>
        <Link to={"/contact"}>
          <Button inForm={false} type="secondary">
            Book a table
          </Button>
        </Link>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTA;
