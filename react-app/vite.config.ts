import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "My App",
        short_name: "My App",
        description: "My App description",
        start_url: "/",
        display: "standalone",
        theme_color: "#3f51b5",
        background_color: "#3f51b5",
        icons: [
          { src: "images/manifest/icon-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "images/manifest/icon-512x512.png", sizes: "512x512", type: "image/png" }
        ]
      },
      workbox: {
        navigateFallback: "/index.html"
      }
    })
  ]
});
