import BackgroundSVG from "../public/background-stars.svg";
import type { Metadata } from "next";
import Image from "next/image";
import "../sass/index.scss";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planets of the Solar System: Unveiling the Marvels Beyond Our Horizon",
  description:
    "Embark on a cosmic odyssey with our guide to the planets of the Solar System. Explore the mysteries of Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Discover unique landscapes, intriguing geology, and the secrets that make each planet a celestial wonder. Join us on a journey through space and unveil the marvels beyond our horizon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="between">
          <h1>
            <Link href={"/"}>The Planets</Link>
          </h1>
          <Navigation />
        </header>
        {children}
        <Image className="global-background" src={BackgroundSVG} alt="background of start" width={0} height={0} sizes="100vw" style={{ height: "100%", objectFit: "cover" }} />
      </body>
    </html>
  );
}
