import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "@routes/AppRouter";

import { Toaster } from "@/components/ui/toaster";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "swiper/css";
import { CartProvider } from "./context/cart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <Toaster />
      <AppRouter />
    </CartProvider>
  </StrictMode>
);
