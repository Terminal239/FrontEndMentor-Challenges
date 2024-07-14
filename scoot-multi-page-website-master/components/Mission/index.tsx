import React from "react";
import Card from "../Reusable/Card";

interface Mission {
  title: string;
  description: string;
  image: string;
}

const data: Mission[] = [
  {
    title: "Mobility for the digital era",
    description: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
    image: "/images/digital-era.jpg",
  },
  {
    title: "Better urban living",
    description: "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
    image: "/images/better-living.jpg",
  },
];

const Mission = ({ upArrowFirst }: { upArrowFirst?: boolean }) => {
  return (
    <section className="mission">
      {data.map((mission, index) => (
        <Card index={index} key={index} upArrowFirst={upArrowFirst} hasButton={false} {...mission} />
      ))}
    </section>
  );
};

export default Mission;
