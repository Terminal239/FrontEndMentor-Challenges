import "./App.css";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import { ShortLinks } from "./components/ShortLinks";
import { Features } from "./components/Features";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <ShortLinks />
        <Features />
        <CTA />
      </Main>
      <Footer />
    </>
  );
};

export default App;
