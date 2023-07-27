import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import vitesconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitesconfigPaths()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@design": path.resolve(__dirname, "./src/design"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
