import MaxWidthWrapper from "../Reusable/MaxWidthWrapper";
import Card from "./Card";

interface Value {
  title: string;
  description: string;
  image: string;
}

const data: Value[] = [
  {
    title: "Our tech",
    description: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    image: "/images/our-tech.jpg",
  },
  {
    title: "Our integrity",
    description: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
    image: "/images/our-integrity.jpg",
  },
  {
    title: "Our community",
    description: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
    image: "/images/our-community.jpg",
  },
];

const Values = ({ title }: { title: string }) => {
  return (
    <section className="values">
      <h2>{title}</h2>
      <div className="value-card-container">
        {data.map((value, index) => (
          <Card key={index} index={index} {...value} />
        ))}
      </div>
    </section>
  );
};

export default Values;
