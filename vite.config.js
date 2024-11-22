import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@routes": path.resolve(__dirname, "./src/routes"),
    },
  },
});
