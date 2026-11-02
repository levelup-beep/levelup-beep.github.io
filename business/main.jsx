import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KursSeite from "../bereich/KursSeite.jsx";
import { seite } from "./content.js";
import "../bereich/index.css";

/**
 * Einstiegspunkt der Seite /business/ (Bereich von Mareike).
 * Aufbau in ../bereich/KursSeite.jsx, Texte in ./content.js.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KursSeite seite={seite} />
  </StrictMode>
);
