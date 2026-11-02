import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Warteliste from "./Warteliste.jsx";
import "../src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Warteliste />
  </StrictMode>
);
