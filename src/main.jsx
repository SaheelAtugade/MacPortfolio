import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TerminalContextProvider } from "react-terminal";
import WindowStateContext from "./components/context/WindowStateContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TerminalContextProvider>
      <WindowStateContext>
        <App />
      </WindowStateContext>
    </TerminalContextProvider>
  </StrictMode>,
);
