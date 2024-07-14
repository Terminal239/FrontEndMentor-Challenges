import Locate from "../../public/icons/locate.svg";
import Pick from "../../public/icons/scooter.svg";
import Enjoy from "../../public/icons/ride.svg";
import Card from "./Card";
import MaxWidthWrapper from "../Reusable/MaxWidthWrapper";
import Image from "next/image";

export interface Instruction {
  title: string;
  description: string;
  image: string;
}

const data: Instruction[] = [
  {
    title: "Locate with app",
    description: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
    image: Locate,
  },
  {
    title: "Pick your scooter",
    description: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost..",
    image: Pick,
  },
  {
    title: "Enjoy the ride",
    description:
      "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
    image: Enjoy,
  },
];

const Instructions = () => {
  return (
    <section className="instructions">
      <MaxWidthWrapper>
        {data.map((instruction, index) => (
          <Card key={index} {...instruction} />
        ))}
        <div className="pattern pattern-line"></div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Instructions;
