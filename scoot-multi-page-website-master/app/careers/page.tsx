import Jobs from "@/components/Jobs";
import Card from "@/components/Reusable/Card";
import MaxWidthWrapper from "@/components/Reusable/MaxWidthWrapper";
import Values from "@/components/Values";

const whyUs = {
  title: "Care to join our mission?",
  description:
    "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
  image: "/images/join-us.jpg",
};

export default function Careers() {
  return (
    <section className="section-careers">
      <div className="hero-background careers">
        <h2>Careers</h2>
      </div>
      <MaxWidthWrapper>
        <Card index={0} {...whyUs} hasButton={true} buttonText="Say helo" />
        <Values title="Why join us?" />
        <Jobs />
      </MaxWidthWrapper>
    </section>
  );
}
