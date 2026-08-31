import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { statSync } from "node:fs";

// The CV's "last updated" line is derived from the file itself, so it cannot
// go stale by accident when a new PDF is dropped in.
function cvUpdated(): string {
  try {
    return statSync(path.resolve(__dirname, "public/cv.pdf")).mtime.toLocaleDateString(
      "en-US",
      { month: "long", year: "numeric", timeZone: "UTC" },
    );
  } catch {
    return "";
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // See src/config/site.ts — switching GitHub Pages hosting mode is a single
  // env var (VITE_BASE_PATH), not a code change.
  base: process.env.VITE_BASE_PATH ?? "/",
  server: {
    host: "::",
    port: 8080,
  },
  define: {
    __CV_UPDATED__: JSON.stringify(cvUpdated()),
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
