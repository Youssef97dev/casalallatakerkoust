const fs = require("fs");
const path = require("path");

const DOMAIN = "https://your-domain.com";

// Group your images by the page they actually appear on
const sitePages = [
  // --- ENGLISH PAGES ---
  {
    pageUrl: "/gallery",
    images: [
      {
        image: "/agafay-gallery/luxury-dining-takerkoust.webp",
        alt: "Outdoor luxury dining experience at Casa Lalla",
      },
      // ... rest of English gallery images
    ],
  },
  {
    pageUrl: "/", // English Homepage
    images: [
      {
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-entrance-marrakech.webp",
        alt: "Entrance to Casa Lalla at the lake",
      },
    ],
  },

  // --- FRENCH PAGES ---
  {
    pageUrl: "/fr/galerie", // Make sure this matches your exact Next.js route
    images: [
      // Same image path, but localized alt text!
      {
        image: "/agafay-gallery/luxury-dining-takerkoust.webp",
        alt: "Expérience gastronomique de luxe en plein air à Casa Lalla",
      },
    ],
  },
  {
    pageUrl: "/fr", // French Homepage
    images: [
      {
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-entrance-marrakech.webp",
        alt: "Entrée du restaurant Casa Lalla au bord du lac",
      },
    ],
  },
];

// Build the XML structure
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

// Loop through each page
sitePages.forEach((page) => {
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}${page.pageUrl}</loc>\n`; // The specific page (e.g., /fr/galerie)

  // Loop through the images on that specific page
  page.images.forEach((item) => {
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${DOMAIN}${item.image}</image:loc>\n`;
    xml += `      <image:caption>${item.alt}</image:caption>\n`;
    xml += `      <image:title>${item.alt}</image:title>\n`;
    xml += `    </image:image>\n`;
  });

  xml += `  </url>\n`;
});

xml += `</urlset>`;

// Save it
fs.writeFileSync(path.join(__dirname, "public", "image-sitemap.xml"), xml);
console.log("✅ Multi-page Image Sitemap generated successfully!");
