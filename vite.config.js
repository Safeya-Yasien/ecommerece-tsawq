import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@routes": "/src/routes",
      "@layouts": "/src/layouts",
      "@data": "/src/data",
    },
  },
});
