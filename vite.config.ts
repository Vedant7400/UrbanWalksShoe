import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // Ensures assets load correctly on Render
  server: {
    host: true, // Allows external access for deployment
    port: 3000, // Use 3000 as it's more common for web apps
  },
  preview: {
    port: 4173, // Render uses this for previewing
    host: true,
  },
  plugins: [
    react(),
    mode === "development" ? componentTagger() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
