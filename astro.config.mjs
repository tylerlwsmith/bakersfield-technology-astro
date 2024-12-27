// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [preact({ compat: true }), tailwind()],
  vite: {
    // @ts-ignore
    plugins: [svgr()],
  },
});
