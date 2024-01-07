import FamilyGathering from "./../assets/homepage/family-gathering-desktop.jpg";
import SpecialEvents from "./../assets/homepage/special-events-desktop.jpg";
import SocialEvets from "./../assets/homepage/social-events-desktop.jpg";

import FamilyGatheringTablet from "./../assets/homepage/family-gathering-tablet.jpg";
import SpecialEventsTablet from "./../assets/homepage/special-events-tablet.jpg";
import SocialEvetsTablet from "./../assets/homepage/social-events-tablet.jpg";

import FamilyGatheringMobile from "./../assets/homepage/family-gathering-mobile.jpg";
import SpecialEventsMobile from "./../assets/homepage/special-events-mobile.jpg";
import SocialEvetsMobile from "./../assets/homepage/social-events-mobile.jpg";

import PatternTopLeft from "./../assets/patterns/pattern-curve-top-left.svg";
import PatternLines from "./../assets/patterns/pattern-lines.svg";

import { useContext, useState } from "react";
import MaxWidthWrapper from "./Reusable/MaxWidthWrapper";
import Button from "./Reusable/Button";
import PatternDivide from "./../assets/patterns/pattern-divide.svg";
import { WindowSize } from "../App";
import { Link } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

const data: Service[] = [
  {
    title: "family gathering",
    description: "We love catering entire families. So please bring everyone along for a special meal with your lovel ones. We'll provide a memorable experience for all.",
    image: {
      desktop: FamilyGathering,
      tablet: FamilyGatheringTablet,
      mobile: FamilyGatheringMobile,
    },
  },
  {
    title: "special events",
    description:
      "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    image: {
      desktop: SpecialEvents,
      tablet: SpecialEventsTablet,
      mobile: SpecialEventsMobile,
    },
  },
  {
    title: "social events",
    description:
      "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    image: {
      desktop: SocialEvets,
      tablet: SocialEvetsTablet,
      mobile: SocialEvetsMobile,
    },
  },
];

const Services = () => {
  const width = useContext(WindowSize);
  const [featureData, setFeatureData] = useState<Service>(data[0]);

  const onClickSetService = (title: string) => {
    const feature = data.find((service) => service.title === title)!;
    setFeatureData(feature);
  };

  return (
    <section className="services">
      <MaxWidthWrapper>
        <div className="service__image">
          <img
            src={width! > 980 ? featureData.image.desktop : width! >= 675 ? featureData.image.tablet : featureData.image.mobile}
            alt={`image depicting the ${featureData.title} service provided by the company`}
          />
          <img className="pattern pattern-lines" src={PatternLines} alt="divide pattern" />
        </div>
        <div className="service__content">
          <div className="service__info">
            <h2>{featureData.title}</h2>
            <p>{featureData.description}</p>
            <Link to={"/contact"}>
              <Button inForm={false} type="primary">
                Book a table
              </Button>
            </Link>
          </div>
          <div className="service__selection">
            <ul>
              {data.map((service) => {
                return (
                  <li className={featureData.title === service.title ? "selected" : ""} key={service.title}>
                    <button className={featureData.title === service.title ? "selected" : ""} onClick={() => onClickSetService(service.title)}>
                      {service.title}
                      {featureData.title === service.title && <img className="pattern pattern-divide" src={PatternDivide} alt="divide pattern" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
      <img className="pattern pattern-curve" src={PatternTopLeft} alt="pattern" />
    </section>
  );
};

export default Services;
