import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "./contexts/ThemeContext.tsx";
import TitleProvider from "./contexts/TitleContext.tsx";
import "./i18n";
import StyleProvider from "./providers/StyleProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TitleProvider>
      <ThemeProvider>
        <StyleProvider>
          <App />
        </StyleProvider>
      </ThemeProvider>
    </TitleProvider>
  </React.StrictMode>
);
