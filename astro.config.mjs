import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

const site = (process.env.SITE_URL ?? "https://monserratherrera.com").replace(/\/$/, "");

export default defineConfig({
  site,
  integrations: [react(), sitemap()],
  server: {
    host: true
  }
});
