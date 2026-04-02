import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

const site = process.env.SITE_URL?.replace(/\/$/, "");
const credentialsPathname = "/credenciales";
const filterSitemapPage = (page) => {
  try {
    return new URL(page).pathname.replace(/\/$/, "") !== credentialsPathname;
  } catch {
    return !page.includes(credentialsPathname);
  }
};

export default defineConfig({
  site,
  integrations: site ? [react(), sitemap({ filter: filterSitemapPage })] : [react()],
  server: {
    host: true
  }
});
