import { CTA } from "./components/CTA";
import { Downlaods } from "./components/Downloads";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Main } from "./components/Main";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Features />
        <Downlaods />
        <FAQ />
        <CTA />
      </Main>
      <Footer />
    </>
  );
};

export default App;
