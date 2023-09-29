import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RatingProvider } from "./components/contexts/ratingContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RatingProvider>
      <App />
    </RatingProvider>
  </React.StrictMode>
);
