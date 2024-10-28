/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AccentColorProvider from "./contexts/AccentColorContext.tsx";
import ThemeProvider from "./contexts/ThemeContext.tsx";
import TitleProvider from "./contexts/TitleContext.tsx";
import "./i18n";
import StyleProvider from "./providers/StyleProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TitleProvider>
      <ThemeProvider>
        <AccentColorProvider>
          <StyleProvider>
            <App />
          </StyleProvider>
        </AccentColorProvider>
      </ThemeProvider>
    </TitleProvider>
  </React.StrictMode>
);
