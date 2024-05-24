import { czechitasRenderVitePlugin } from "@czechitas/render/plugin";
import { glob } from "glob";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/pages",
  publicDir: "../../public",
  server: {
    hmr: false,
    open: "/dum01.html", // Nastavení serveru pro automatické otevírání /dum01.html
  },
  build: {
    outDir: "../../dist",
    emptyOutDir: true,
    target: "es2022",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "../../public/dum01.html"), // Výchozí vstupní bod
        ...glob.sync("src/pages/**/*.html").reduce((acc, file) => {
          const name = file.replace("src/pages/", "").replace(".html", "");
          acc[name] = resolve(__dirname, file);
          return acc;
        }, {}),
      },
    },
    modulePreload: false,
  },
  plugins: [czechitasRenderVitePlugin()],
});
