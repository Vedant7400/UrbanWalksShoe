import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Vite Configuration
export default defineConfig(({ mode }) => ({
  base: "/", // Ensures assets load correctly on Render
  server: {
    host: "::", // Allows external access for deployment
    port: 8080, // Changed to 8080 as per the new config
  },
  preview: {
    port: 4173, // Render uses this for previewing
    host: true,
  },
  plugins: [
    react(),
    mode === "development" ? componentTagger() : null, // Add componentTagger in development mode
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
