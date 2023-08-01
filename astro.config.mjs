import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import { basename, resolve } from "path";
var folderName = basename(resolve(process.cwd()));

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  compressHTML: true,
  outDir: `../../public/${folderName}`,
  build: {
    assetsPrefix: "https://interactive.brand.com",
  },
});
