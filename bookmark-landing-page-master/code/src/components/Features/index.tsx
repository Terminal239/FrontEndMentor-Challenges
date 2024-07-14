import FeatureTab from "./FeatureTab";
import FeatureTabButtons from "./FeatureTabButtons";

import IllustrationBookmark from "../../assets/illustration-features-tab-1.svg";
import IllustrationSearch from "../../assets/illustration-features-tab-2.svg";
import IllustrationShare from "../../assets/illustration-features-tab-3.svg";
import { useState } from "react";
import MaxWidthWrapper from "../Resuable/MaxWidthWrapper";
import styles from "./Features.module.css";

export interface Feature {
  id: number;
  name: string;
  data: {
    title: string;
    content: string;
    image: string;
    altText: string;
  };
}

const FEATURE_DATA: Feature[] = [
  {
    id: 1,
    name: "Simple Bookmarking",
    data: {
      title: "Bookmark in one click",
      content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      image: IllustrationBookmark,
      altText: "illustration of application with bookmarking features",
    },
  },
  {
    id: 2,
    name: "Speedy Searching",
    data: {
      title: "Intelligent search",
      content: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      image: IllustrationSearch,
      altText: "illustration of application with searching features",
    },
  },
  {
    id: 3,
    name: "Easy Sharing",
    data: {
      title: "Share your bookmarks",
      content: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      image: IllustrationShare,
      altText: "illustration of application with sharing features",
    },
  },
];

export const Features = () => {
  const [featureSelected, setFeatureSelected] = useState<Feature>(FEATURE_DATA[0]);

  const handleFeatureSelect = (id: number) => {
    const findFeature = FEATURE_DATA.find((feature) => feature.id === id)!;
    setFeatureSelected(findFeature);
  };

  return (
    <section className="section-features">
      <MaxWidthWrapper classes={`${styles.container}`}>
        <div className={`${styles["features-text"]}`}>
          <h2>Features</h2>
          <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>
        <FeatureTabButtons selectedId={featureSelected.id} onClickFeature={handleFeatureSelect} features={FEATURE_DATA} />
        <FeatureTab {...featureSelected!.data} />
      </MaxWidthWrapper>
    </section>
  );
};
