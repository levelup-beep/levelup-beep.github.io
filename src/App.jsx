import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import About from "./components/About.jsx";
import Angebot from "./components/Angebot.jsx";
import LernenMitMir from "./components/LernenMitMir.jsx";
import SeriesTeaser from "./components/SeriesTeaser.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { useHashScroll } from "../shared/useHashScroll.js";

export default function App() {
  useReveal();
  useHashScroll();

  return (
    <>
      <main id="hauptinhalt">
        <Ticker />
        <Hero />
        <Ticker tone="light" reverse />
        <About />
        <Ticker />
        <LernenMitMir />
        <SeriesTeaser />
        <Ticker tone="light" reverse />
        <Angebot />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
