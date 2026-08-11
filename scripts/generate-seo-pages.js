import fs from "fs";
import path from "path";

const DIST = path.resolve("dist");
const baseHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

const pages = [
  {
    file: "platform.html",
    title: "Platform | Detection Forge",
    description: "See how Detection Forge validates detection rules, tracks the detection lifecycle, and closes SIEM coverage gaps.",
    path: "/platform",
  },
  {
    file: "use-cases.html",
    title: "Use Cases | Detection Forge",
    description: "From SIEM migrations to continuous coverage checks — see how detection engineering teams use Detection Forge to validate rules against real historical data.",
    path: "/use-cases",
  },
  {
    file: "company.html",
    title: "Company | Detection Forge",
    description: "Learn about Detection Forge's mission to bring validation and assurance to detection engineering, and the team building the platform.",
    path: "/company",
  },
  {
    file: "resources.html",
    title: "Resources | Detection Forge",
    description: "Guides, playbooks, and technical deep-dives on detection engineering, the detection lifecycle, and building measurable SOC coverage.",
    path: "/resources",
  },
  {
    file: "careers.html",
    title: "Careers | Detection Forge",
    description: "Join Detection Forge and help build the platform SOC teams use to validate detections and close SIEM coverage gaps.",
    path: "/careers",
  },
];

const SITE = "https://www.detectionforge.com";

for (const page of pages) {
  let html = baseHtml;

  html = html.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?"\s*\/>/,
    `<meta name="description" content="${page.description}" />`
  );
  html = html.replace(
    /<link rel="canonical" href=".*?"\s*\/>/,
    `<link rel="canonical" href="${SITE}${page.path}" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?"\s*\/>/,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?"\s*\/>/,
    `<meta property="og:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?"\s*\/>/,
    `<meta property="og:url" content="${SITE}${page.path}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content=".*?"\s*\/>/,
    `<meta name="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?"\s*\/>/,
    `<meta name="twitter:description" content="${page.description}" />`
  );

  fs.writeFileSync(path.join(DIST, page.file), html);
  console.log(`Generated ${page.file}`);
}