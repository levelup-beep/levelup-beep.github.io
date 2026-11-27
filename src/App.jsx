import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import About from "./components/About.jsx";
import LernenMitMir from "./components/LernenMitMir.jsx";
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
        {/* Angebot und Season-Übersicht vorerst ausgeblendet (Insa, 27.11.2026):
            Workshops nur anteasern, nichts zum Kaufen zeigen. */}
        <Ticker tone="light" reverse />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
