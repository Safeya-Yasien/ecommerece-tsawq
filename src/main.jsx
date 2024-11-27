import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "@routes/AppRouter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "swiper/css";
import { CartProvider } from "./context/cart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AppRouter />
    </CartProvider>
  </StrictMode>
);
