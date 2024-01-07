import Hero from "./components/Hero";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { useWindowSize } from "@uidotdev/usehooks";
import { createContext } from "react";

export const WindowSize = createContext(0);

const App = () => {
  const { width } = useWindowSize();

  return (
    <WindowSize.Provider value={width!}>
      <>
        <main>
          <Hero />
          <Features />
          <Highlights />
          <Services />
          <CTA />
        </main>
        <Footer />
      </>
    </WindowSize.Provider>
  );
};

export default App;
