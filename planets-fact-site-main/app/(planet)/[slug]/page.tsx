"use client";
import Content from "@/components/Content";
import ContentTab from "@/components/ContentTab";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Statistics from "@/components/Statistics";
import planets from "@/data";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

interface Props {
  params: {
    slug: string;
  };
}

enum ContentTabs {
  Overview = "overview",
  Structure = "structure",
  Geology = "geology",
}

const Planet = ({ params }: Props) => {
  const [contentTab, setContentTab] = useState<ContentTabs>(ContentTabs.Overview);
  const planetInfo: Planet = planets.find((planet) => planet.slug === params.slug)!;

  const { rotation, revolution, radius, temperature } = planetInfo;

  let image = "";
  switch (contentTab) {
    case "overview":
      image = planetInfo.images.planet;
      break;
    case "structure":
      image = planetInfo.images.internal;
      break;
    case "geology":
      image = planetInfo.images.planet;
      break;
  }

  return (
    <>
      <main>
        <MaxWidthWrapper>
          <section className="information">
            <div className="planet-image">
              <Image priority={true} src={image} alt={`illustration of ${planetInfo.slug}`} width={0} height={0} style={{ width: "70%", height: "100%" }} />
              {contentTab === "geology" && (
                <Image
                  src={`/geology-${planetInfo.slug}.png`}
                  alt={`geology of ${planetInfo.slug}`}
                  width={126}
                  height={126}
                  style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, 0%)" }}
                />
              )}
            </div>
            <Content name={planetInfo.name} data={planetInfo[contentTab]} />
            <ContentTab contentTab={contentTab} setContentTab={setContentTab} />
          </section>
          <Statistics rotation={rotation} revolution={revolution} radius={radius} temperature={temperature} />
        </MaxWidthWrapper>
      </main>
    </>
  );
};

export default Planet;
