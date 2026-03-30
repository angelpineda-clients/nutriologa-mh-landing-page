import { siteMeta } from "../data/landing-content";

export function GET() {
  const lines = ["User-agent: *", "Allow: /"];

  if (siteMeta.siteUrl) {
    lines.push(`Sitemap: ${siteMeta.siteUrl}/sitemap-index.xml`);
  }

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
