import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL, llmJsonURL: URL, llmTxtURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
Sitemap: ${llmJsonURL.href}
Sitemap: ${llmTxtURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);

  const llmJsonURL = new URL("llm.json", site);
  const llmTxtURL = new URL("llm.txt", site);

  return new Response(getRobotsTxt(sitemapURL, llmJsonURL, llmTxtURL));
};
