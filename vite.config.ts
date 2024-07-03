import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target:
          "https://r.statista.com/wp-content/themes/statista-theme/addons/services/rankinglist.php?ranking_id=P-173224&topic_hub=healthcare",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      cors: "false",
    },
  },
  plugins: [vue()],
});
