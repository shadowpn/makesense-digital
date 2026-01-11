import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const BASE_URL = "https://sensepowerdigital.com";

const staticPages = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/research",
  "/contact",
];

const portfolioProjects = [
  "/portfolio/tennis-connect-platform",
  "/portfolio/landing-vibecode",
  "/portfolio/aussie-way-visa",
  "/portfolio/sense-studyhub",
  "/portfolio/expert-lash",
  "/portfolio/ora-aid",
];

async function generateSitemap() {
  const links = [
    ...staticPages.map((url) => ({
      url,
      changefreq: "weekly",
      priority: url === "/" ? 1.0 : 0.9,
    })),
    ...portfolioProjects.map((url) => ({
      url,
      changefreq: "monthly",
      priority: 0.8,
    })),
  ];

  const stream = new SitemapStream({ hostname: BASE_URL });
  const xml = await streamToPromise(Readable.from(links).pipe(stream));

  writeFileSync("dist/sitemap.xml", xml.toString());
  console.log("✅ sitemap.xml generated");
}

generateSitemap();
