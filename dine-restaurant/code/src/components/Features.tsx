import Enjoyable from "./../assets/homepage/enjoyable-place-desktop.jpg";
import Locally from "./../assets/homepage/locally-sourced-desktop.jpg";
import EnjoyableTablet from "./../assets/homepage/enjoyable-place-tablet.jpg";
import LocallyTablet from "./../assets/homepage/locally-sourced-tablet.jpg";
import EnjoyableMobile from "./../assets/homepage/enjoyable-place-mobile.jpg";
import LocallyMobile from "./../assets/homepage/locally-sourced-mobile.jpg";
import MaxWidthWrapper from "./Reusable/MaxWidthWrapper";
import PatternTopLeft from "./../assets/patterns/pattern-curve-top-right.svg";
import PatternBottomRight from "./../assets/patterns/pattern-curve-top-left.svg";
import PatternLines from "./../assets/patterns/pattern-lines.svg";
import PatternDivide from "./../assets/patterns/pattern-divide.svg";
import { useContext } from "react";
import { WindowSize } from "../App";

interface Feature {
  title: string;
  description: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  altText: string;
}

const data: Feature[] = [
  {
    title: "Enjoyable place for all the family",
    description: "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
    image: { desktop: Enjoyable, tablet: EnjoyableTablet, mobile: EnjoyableMobile },
    altText: "enjoyable place for the family",
  },
  {
    title: "The most locally sourced food",
    description: "All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.",
    image: { desktop: Locally, tablet: LocallyTablet, mobile: LocallyMobile },
    altText: "locally sourced food",
  },
];

const Features = () => {
  const width = useContext(WindowSize);

  return (
    <section className="features">
      {data.map(({ title, description, image, altText }, index) => {
        return (
          <article className="card">
            <MaxWidthWrapper>
              <div className="card__content">
                <h2>{title}</h2>
                <p>{description}</p>
                <img className="pattern pattern-divide" src={PatternDivide} alt="divide pattern" />
              </div>
              <div className="card__image">
                <img src={width! > 1000 ? image.desktop : width! >= 675 ? image.tablet : image.mobile} alt={altText} />
                {index % 2 == 1 && <img className="pattern pattern-lines" src={PatternLines} alt="divide pattern" />}
              </div>
            </MaxWidthWrapper>
            <img className="pattern pattern-curve" src={index % 2 == 1 ? PatternBottomRight : PatternTopLeft} alt="pattern" />
          </article>
        );
      })}
    </section>
  );
};

export default Features;
