import { createContext, StrictMode, useContext, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const backendURL = "https://mern-court-control-bkcn.vercel.app";

const dBContext = createContext({
  backendURL,
});

export const useDBContext = () => useContext(dBContext);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <dBContext.Provider value={{ backendURL }}>
      <App />
    </dBContext.Provider>
  </StrictMode>
);
