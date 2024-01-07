import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import IconRecognition from "../../assets/icon-brand-recognition.svg";
import IconRecords from "../../assets/icon-detailed-records.svg";
import IconCustomizable from "../../assets/icon-fully-customizable.svg";

import FeatureCard from "./FeatureCard";
import FeatureContainer from "./FeatureContainer";
import styles from "./Statistics.module.css";

interface Feature {
  title: string;
  description: string;
  illustration: string;
  altText: string;
}

const FEATURE_DATA: Feature[] = [
  {
    title: "Brand Recognition",
    description: `Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.`,
    illustration: IconRecognition,
    altText: "image depicting a bar chart trending upwards",
  },
  {
    title: "Detailed Records",
    description: `Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`,
    illustration: IconRecords,
    altText: "image depicting a speedometer halfway through",
  },
  {
    title: "Fully Customizable",
    description: `Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`,
    illustration: IconCustomizable,
    altText: "image depicting a pen, brush and marker",
  },
];

export const Features = () => {
  return (
    <section className={styles["section-downloads"]}>
      <MaxWidthWrapper classes={`${styles.container}`}>
        <div className={styles["features-text"]}>
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <FeatureContainer>
          {FEATURE_DATA.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </FeatureContainer>
      </MaxWidthWrapper>
    </section>
  );
};
