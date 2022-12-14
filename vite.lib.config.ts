import path from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })],
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/hooks/index.ts"),
      name: "vx-geolocation",
      fileName: (format) => `vx-geolocation.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
