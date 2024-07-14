"use client";

import FAQ from "@/components/FAQ";
import Mission from "@/components/Mission";
import MaxWidthWrapper from "@/components/Reusable/MaxWidthWrapper";
import Values from "@/components/Values";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";

export default function About() {
  const { width } = useWindowSize();

  return (
    <>
      <div className="hero-background about">
        <h2>About</h2>
        {width! > 740 && width! < 950 && <Image className="pattern pattern-circle" src="/patterns/white-circles.svg" alt="man riding a scooter" height={63} width={234} />}
      </div>
      <MaxWidthWrapper>
        <Mission upArrowFirst={true} />
        <Values title="Our Values" />
        <FAQ />
      </MaxWidthWrapper>
    </>
  );
}
