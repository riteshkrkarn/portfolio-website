import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainBox from "./MainBox.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <MainBox />
    </>
  </StrictMode>
);
