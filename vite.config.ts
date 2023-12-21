import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "root-app",
      filename: "remoteEntry.js",
      remotes: {
        "remote-mfe": "http://localhost:3001/assets/remote-mfe-entry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand"],
    }),
  ],
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  define: {
    process: process,
  },
})
