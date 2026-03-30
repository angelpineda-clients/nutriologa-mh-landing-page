import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

const site = process.env.SITE_URL?.replace(/\/$/, "");

export default defineConfig({
  site,
  integrations: site ? [react(), sitemap()] : [react()],
  server: {
    host: true
  }
});
