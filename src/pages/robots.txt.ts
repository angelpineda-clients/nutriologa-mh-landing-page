import { siteMeta } from "../data/landing-content";

export function GET() {
  const siteUrl = siteMeta.siteUrl || "https://monserratherrera.com";
  const lines = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${siteUrl}/sitemap-index.xml`
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
