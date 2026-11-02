import Hero from "./components/Hero.jsx";
import Ticker from "./components/Ticker.jsx";
import Kurse from "./components/Kurse.jsx";
import AboutTeam from "./components/AboutTeam.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { useHashScroll } from "../shared/useHashScroll.js";

/**
 * Startseite (/) fuer alle drei Bereiche.
 * Eigenstaendige Kopie — aendert nichts an /schule/ oder /frauen/.
 */
export default function App() {
  useReveal();
  useHashScroll();

  return (
    <>
      <main id="hauptinhalt">
        <Ticker />
        <Hero />
        <Ticker tone="light" reverse />
        <Kurse />
        <Ticker />
        <AboutTeam />
      </main>
      <Footer />
    </>
  );
}
