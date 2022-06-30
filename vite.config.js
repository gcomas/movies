import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "hooks", replacement: "/src/hooks" },
      { find: "helpers", replacement: "/src/helpers" },
      { find: "components", replacement: "/src/components" },
    ],
  },
  define: {
    "process.env": process.env,
  },
});
