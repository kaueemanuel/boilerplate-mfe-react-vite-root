import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), "")

  return {
    plugins: [
      react(),
      federation({
        name: "root-app",
        filename: "remoteEntry.js",
        remotes: {
          "remote-mfe": {
            external : env.REMOTE_MFE_URL,
            externalType: "url",
            format: "esm",
            from: "vite"
          },
        },
        shared: {
          "react": "*",
          "react-dom": "*",
          "react-router-dom": "*",
          "zustand": "*",
        },
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
      port: +env.PORT,
    },
    preview: {
      port: +env.PORT,
    },
    define: {
      process: process,
    },
  }
})
