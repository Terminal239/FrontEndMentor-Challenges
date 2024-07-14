import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="introduction">
      <MaxWidthWrapper>
        <div className="text">
          <Typewriter inputText="Explore the Wonders of Our Solar System" element="h2" />
          <p>
            Welcome to our celestial journey through the planets of the Solar System! Each celestial body holds unique mysteries and characteristics that make our cosmic
            neighborhood a fascinating expanse. Here&apos;s a glimpse into the diverse worlds that orbit our Sun.
          </p>
        </div>
        <div className="planets">
          <div className="item">
            <Typewriter inputText="Mercury: The Swift Messenger" element="h3" />
            <p>
              Meet Mercury, the smallest planet in our Solar System. With a scorching temperature of 430°C, Mercury completes its orbit in just 87.97 Earth days. Explore its rocky
              terrain and delve into its intriguing internal structure.
            </p>
            <button>
              <Link href={"/mercury"}>Explore</Link>
            </button>
          </div>
          <div className="item">
            <Typewriter inputText="Venus: The Morning Star" element="h3" />
            <p>
              Named after the Roman goddess of love, Venus shines bright in our night sky. This dense and volcanic planet has a rotation of 243 days and a sizzling surface
              temperature of 471°C. Discover the secrets hidden beneath its thick atmosphere.
            </p>
            <button>
              <Link href={"/venus"}>Explore</Link>
            </button>
          </div>
          <div className="item">
            <Typewriter inputText="Earth: Our Oasis in Space" element="h3" />
            <p>
              Our home, Earth, is the only known planet to harbor life. With a rotation of 0.99 days and a revolution of 365.26 days, explore the diverse landscapes and the
              intricate layers that make Earth a haven for life.
            </p>
            <button>
              <Link href={"/earth"}>Explore</Link>
            </button>
          </div>
          <div className="item">
            <Typewriter inputText="Mars: The Red Planet" element="h3" />
            <p>
              Mars, the &quot;Red Planet&quot;, beckons with its unique surface geology and a day just over 24 hours. With a chilly temperature of -28°C, Mars has intrigued
              humanity for centuries. Uncover the mysteries of its iron-rich composition.
            </p>
            <button>
              <Link href={"/mars"}>Explore</Link>
            </button>
          </div>
          <div className="item">
            <Typewriter inputText="Jupiter: The Giant of the Solar System" element="h3" />
            <p>
              Jupiter, the largest planet, boasts a rapid rotation of 9.93 hours and a massive, turbulent atmosphere. Witness the awe-inspiring Great Red Spot, a storm that has
              raged for centuries.
            </p>
            <button>
              <Link href={"/jupiter"}>Explore</Link>
            </button>
          </div>
          <div className="item">
            <Typewriter inputText="Saturn: The Ringed Wonder" element="h3" />
            <p>
              Saturn, with its stunning ring system, takes center stage. With a day lasting 10.8 hours and a revolution of 29.46 years, Saturn&apos;s beauty lies not only in its
              rings but also in its unique atmosphere.
            </p>
            <button>
              <Link href={"/saturn"}>Explore</Link>
            </button>
          </div>
          <div className="item">
            <Typewriter inputText="Uranus: The Sideways Planet" element="h3" />
            <p>Uranus, the seventh planet, challenges convention with its sideways rotation. Dive into its icy structure and the mysteries of its gaseous atmosphere.</p>
            <button>
              <Link href={"/uranus"}>Explore</Link>
            </button>
          </div>
          <div className="item">
            <Typewriter inputText="Neptune: The Mystic Blue Giant" element="h3" />
            <p>
              Neptune, our farthest known planet, captivates with its deep blue hue. With a rotation of 16.08 hours and a revolution of 164.79 years, explore the secrets of its
              dense atmosphere and internal structure.
            </p>
            <button>
              <Link href={"/neptune"}>Explore</Link>
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Home;
