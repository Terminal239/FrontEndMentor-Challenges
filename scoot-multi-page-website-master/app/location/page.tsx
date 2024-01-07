import Button from "@/components/Reusable/Button";
import MaxWidthWrapper from "@/components/Reusable/MaxWidthWrapper";
import Image from "next/image";

const locations = ["new york", "london", "yokohama", "jakarta"];

export default function Location() {
  return (
    <section className="location">
      <div className="hero-background location">
        <h2>Location</h2>
      </div>
      <MaxWidthWrapper>
        <div className="world-map">
          <Image src="/images/world-map-desktop.png" alt="world map showing locations of the branches" width={1110} height={543} />
          {locations.map((location, index) => (
            <div className={`pointer ${location}`} key={index}>
              <span>{location}</span>
              <div className="pointer-triangle"></div>
            </div>
          ))}
        </div>
        <div className="location__text">
          <h2>Your City Not Listed?</h2>
          <p>
            If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link
            or messaging us on social.
          </p>
          <Button type="primary">Message us</Button>
        </div>
      </MaxWidthWrapper>
      <Image className="pattern pattern-circle" src="/patterns/circle.svg" alt="man riding a scooter" height={445} width={445} />
    </section>
  );
}
