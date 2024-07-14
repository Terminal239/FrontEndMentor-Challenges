import RosemaryFilet from "../assets/homepage/beef-desktop-tablet.jpg";
import ChocolateMousse from "../assets/homepage/chocolate-desktop-tablet.jpg";
import SalmonFillet from "../assets/homepage/salmon-desktop-tablet.jpg";

import RosemaryFiletMobile from "../assets/homepage/beef-mobile.jpg";
import ChocolateMousseMobile from "../assets/homepage/chocolate-mobile.jpg";
import SalmonFilletMobile from "../assets/homepage/salmon-mobile.jpg";

import { useContext } from "react";
import { WindowSize } from "../App";
import PatternDivide from "../assets/patterns/pattern-divide.svg";
import MaxWidthWrapper from "./Reusable/MaxWidthWrapper";

interface Highlight {
  title: string;
  description: string;
  image: {
    desktop: string;
    mobile: string;
  };
}

const data: Highlight[] = [
  {
    title: "Seared salmon fillet",
    description: "Our locally sourced served with a refreshing buckwheat summer salad.",
    image: {
      desktop: SalmonFillet,
      mobile: SalmonFilletMobile,
    },
  },
  {
    title: "Rosemart filet mignon",
    description: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    image: {
      desktop: RosemaryFilet,
      mobile: RosemaryFiletMobile,
    },
  },
  {
    title: "Summer fruit chocolate mousse",
    description: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    image: {
      desktop: ChocolateMousse,
      mobile: ChocolateMousseMobile,
    },
  },
];

const Highlights = () => {
  const width = useContext(WindowSize);

  return (
    <section className="highlights">
      <MaxWidthWrapper>
        <div className="highlights__text">
          <h2>A few highlights from our menu</h2>
          <p>We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season.</p>
          <img className="pattern pattern-divide" src={PatternDivide} alt="divide pattern" />
        </div>
        <div className="highlights__container">
          {data.map(({ title, description, image }) => (
            <article className="highlights__item">
              <div className="highlights__image">
                <img src={width! > 575 ? image.desktop : image.mobile} alt={`image of ${title}`} />
                <img className="pattern pattern-divide" src={PatternDivide} alt="divide pattern" />
              </div>
              <div className="highlights__content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Highlights;
