import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./styles/tailwind.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
