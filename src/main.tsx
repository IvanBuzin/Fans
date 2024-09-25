import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppModule } from "./app.module";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AppModule />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
