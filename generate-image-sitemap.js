const fs = require("fs");
const path = require("path");

// Add this helper function
function escapeXML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const DOMAIN = "https://www.casalallatakerkoust.com";

// Group your images by the page they actually appear on
const sitePages = [
  // --- ENGLISH PAGES ---
  {
    pageUrl: "/gallery",
    lastmod: "2026-06-01",
    priority: "1.0",
    images: [
      {
        image:
          "/agafay-takerkoust/restaurant-casa-lalla-takerkoust-agafay-vibes.webp",
        alt: "Restaurant Casa Lalla dining area overlooking Lake Takerkoust with Agafay desert vibes near Marrakech",
        title:
          "Experience Restaurant Casa Lalla - Takerkoust & Agafay Desert Dining",
      },
      {
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-restaurant-ibiza-style-marrakech.webp",
        alt: "Exclusive Ibiza style restaurant and day club at Lake Lalla Takerkoust near Marrakech",
        title:
          "Experience Ibiza Style Luxury Dining at Lake Takerkoust Marrakech",
      },
      {
        image:
          "/agafay-takerkoust/bohemian-terrace-dining-casa-lalla-takerkoust.webp",
        alt: "Boho-chic terrace dining at Casa Lalla Takerkoust offering a luxury desert experience",
        title: "Bohemian Luxury Terrace Dining Outside Marrakech",
      },
      {
        image:
          "/agafay-takerkoust/atlas-mountains-view-from-restaurant-marrakech.webp",
        alt: "Breathtaking Atlas Mountains view from a luxury day club and restaurant in Marrakech",
        title: "Panoramic Atlas Mountain Views from Our Lakeside Restaurant",
      },
      {
        image:
          "/agafay-takerkoust/spanish-tapas-mediterranean-food-marrakech.webp",
        alt: "Gourmet Spanish tapas and Mediterranean food served at an upscale Marrakech restaurant",
        title: "Premium Spanish Tapas & Mediterranean Cuisine in Marrakech",
      },
      {
        image: "/agafay-takerkoust/signature-cocktails-day-club-marrakech.webp",
        alt: "Signature craft cocktails at a luxury day club by Lake Takerkoust with Ibiza party vibes",
        title: "Refresh with Signature Cocktails at Our Marrakech Day Club",
      },
      {
        image: "/agafay-gallery/romantic-dinner-agafay-desert-under-stars.webp",
        alt: "Elegant romantic dinner setup under the stars in the Agafay Desert with luxury service",
        title: "Unforgettable Romantic Desert Dinner Under the Stars",
      },
      {
        image: "/agafay-gallery/lalla-takerkoust-marrakech-weather-sunset.webp",
        alt: "Golden hour sunset dinner at a luxury Agafay desert restaurant with perfect Marrakech weather",
        title: "Golden Hour Luxury Sunset Dinner Near Marrakech",
      },
      {
        image: "/agafay-gallery/agafay-desert-day-trip.webp",
        alt: "Premium Mediterranean mezze platter served during a luxury Agafay Desert day trip",
        title: "Indulge in Mediterranean Mezze on Your Agafay Day Trip",
      },
      {
        image: "/agafay-gallery/restaurants-agafay-poolside-lunch.webp",
        alt: "Luxury poolside lunch with Ibiza vibes in the rocky landscape of the Agafay desert",
        title: "Luxury Poolside Lunch in the Agafay Desert",
      },
      {
        image: "/agafay-gallery/private-events-restaurants-agafay-desert.webp",
        alt: "Intricate Moroccan boho-chic decor at Casa Lalla, perfect for private events near Marrakech",
        title: "Boho-Chic Private Event Venue at Casa Lalla Agafay",
      },
      {
        image: "/agafay-gallery/casa-lalla-takerkoust-agafay-desert-view.webp",
        alt: "Panoramic view of Casa Lalla Takerkoust luxury day club situated near the Agafay desert",
        title: "Stunning Panoramic Views of Casa Lalla Takerkoust",
      },
      {
        image:
          "/agafay-gallery/authentic-moroccan-food-marrakech-restaurants.webp",
        alt: "Authentic high-end Moroccan food platter served at a trendy restaurant near Marrakech",
        title: "High-End Authentic Moroccan Food Tasting",
      },
      {
        image: "/agafay-gallery/agafay-desert-pool-ibiza-vibe-marrakech.webp",
        alt: "Relaxing by the luxury pool at Casa Lalla Takerkoust with an exclusive Ibiza day club vibe",
        title: "Exclusive Ibiza Vibe Poolside Lounge in Marrakech",
      },
      {
        image: "/agafay-gallery/luxury-dining-takerkoust-mykonos-style.webp",
        alt: "Outdoor luxury dining experience at Casa Lalla featuring a chic Mykonos aesthetic",
        title: "Chic Mykonos-Style Outdoor Luxury Dining",
      },
      {
        image: "/agafay-gallery/best-moroccan-food-lunch-lake-takerkoust.webp",
        alt: "VIP guests enjoying a premium Moroccan food lunch overlooking Lake Takerkoust",
        title: "Premium Moroccan Lunch Overlooking Lake Takerkoust",
      },
      {
        image: "/agafay-gallery/sunset-party-agafay-ibiza-atmosphere.webp",
        alt: "Vibrant sunset party atmosphere at Casa Lalla in Agafay featuring world-class Ibiza energy",
        title: "Vibrant Ibiza-Style Sunset Party at Casa Lalla",
      },
      {
        image:
          "/agafay-gallery/chic-desert-oasis-design-mykonos-inspiration.webp",
        alt: "Chic desert oasis design of Casa Lalla drawing inspiration from luxury Mykonos architecture",
        title: "Discover Our Mykonos-Inspired Desert Oasis",
      },
      {
        image: "/agafay-gallery/casa-lalla-agafay-menu-moroccan-cuisine.webp",
        alt: "A gourmet spread of traditional Moroccan cuisine from the exclusive Casa Lalla Agafay menu",
        title: "Gourmet Moroccan Cuisine from the Casa Lalla Menu",
      },
      {
        image: "/agafay-gallery/lalla-takerkoust-lake-weather-marrakech.webp",
        alt: "Magical sunset over Lake Takerkoust with premium boho-chic Agafay desert vibes",
        title: "Magical Sunset Views and Boho-Chic Desert Vibes",
      },
      {
        image: "/agafay-gallery/agafay-desert-buggy-tour-marrakech.webp",
        alt: "Elevated rooftop terrace view over the serene waters of Lake Takerkoust after a buggy tour",
        title: "Rooftop Terrace Views over Serene Lake Takerkoust",
      },
      {
        image: "/agafay-gallery/quad-biking-agafay-desert-marrakech.webp",
        alt: "High-end mixology and creative cocktails at the best festive day club in Marrakech",
        title: "Festive Day Club Mixology & Creative Cocktails",
      },
      {
        image: "/agafay-gallery/agafay-desert-day-trip-shuttle-service.webp",
        alt: "Attentive VIP service at an Agafay desert luxury camp providing a 5-star guest experience",
        title: "5-Star VIP Service in the Agafay Desert",
      },
      {
        image: "/agafay-gallery/mechoui-roasted-lamb-desert-dinner.webp",
        alt: "Panoramic views of the Lake Takerkoust dam and the snow-capped High Atlas Mountains",
        title: "Breathtaking Views of Lake Takerkoust and the Atlas Mountains",
      },
      {
        image:
          "/agafay-gallery/spanish-paella-lakeside-marrakech-restaurant.webp",
        alt: "Lush Mediterranean gardens for a peaceful escape combining Ibiza chill out with Marrakech charm",
        title: "Peaceful Mediterranean Gardens with Ibiza Chill Vibes",
      },
      {
        image:
          "/agafay-gallery/lobster-pastilla-mediterranean-cuisine-marrakech.webp",
        alt: "Vibrant assortment of premium Moroccan salads at a top luxury restaurant in Marrakech",
        title: "Premium Assortment of Authentic Moroccan Salads",
      },
      {
        image: "/agafay-gallery/yoga-lalla-takerkoust-lake-meditation.webp",
        alt: "Sophisticated outdoor dining with authentic Agafay vibes at our luxury Mykonos-style camp",
        title: "Sophisticated Outdoor Dining with Agafay Desert Vibes",
      },
      {
        image: "/agafay-gallery/lakeside-picnic-atlas-mountains-view.webp",
        alt: "Nightly stargazing sessions from our rooftop terrace under the clear Agafay desert skies",
        title: "Rooftop Stargazing Sessions in the Agafay Desert",
      },
      {
        image:
          "/agafay-gallery/mastiha-signature-cocktail-marrakech-lounge.webp",
        alt: "Fresh grilled Mediterranean octopus and seafood, a staple at our Mykonos-inspired restaurant",
        title: "Fresh Grilled Mediterranean Seafood & Octopus",
      },
      {
        image: "/agafay-gallery/restaurants-marocain-marrakech-chef.webp",
        alt: "The perfect sunset aperitif at our luxury lounge bar overlooking Lake Lalla Takerkoust",
        title: "Enjoy the Perfect Sunset Aperitif Overlooking the Lake",
      },
      {
        image: "/agafay-gallery/mediterranean-mezze-platter-boho-chic.webp",
        alt: "Elegant boho-chic afternoon tea service offering a luxury experience near Marrakech",
        title: "Elegant Boho-Chic Afternoon Tea Experience",
      },
      {
        image:
          "/agafay-gallery/floating-breakfast-heart-tray-private-pool.webp",
        alt: "Action-packed quad biking and buggy tour through the rocky landscape of the Agafay desert",
        title: "Action-Packed Agafay Desert Quad Biking Tour",
      },
      {
        image: "/agafay-gallery/organic-herb-garden-sustainable-culinary.webp",
        alt: "Chic rooftop lounge with premium Ibiza vibes and panoramic Agafay desert sunset views",
        title: "Chic Rooftop Lounge with Premium Ibiza Sunset Vibes",
      },
      {
        image:
          "/agafay-takerkoust/best-moroccan-food-tagine-restaurant-marrakech.webp",
        alt: "Traditional gourmet Moroccan tagine served at a luxury restaurant near the Atlas Mountains",
        title:
          "Authentic Moroccan Cuisine at Casa Lalla best restaurant in marrakech",
      },
      {
        image:
          "/agafay-takerkoust/couples-dining-experience-restaurant-near-agafay.webp",
        alt: "Couple enjoying a luxury romantic dinner with sunset views near the Agafay desert, Morocco",
        title: "Romantic Couples Dining in Morocco",
      },
      {
        image:
          "/agafay-takerkoust/luxury-rooftop-restaurant-agafay-desert-surroundings.webp",
        alt: "Luxurious boho rooftop seating area offering panoramic views of the Agafay desert surroundings",
        title: "Luxury Rooftop Lounge View in Agafay",
      },
      {
        image:
          "/agafay-takerkoust/romantic-dinner-marrakech-atlas-mountains-view.webp",
        alt: "Romantic candlelight dinner table setup with Atlas Mountains backdrop at Casa Lalla in Morocco",
        title: "Romantic Dinner Experience Near Marrakech",
      },
      {
        image:
          "/agafay-takerkoust/traditional-moroccan-tea-experience-takerkoust.webp",
        alt: "Pouring traditional Moroccan mint tea with a beautiful lake view at Casa Lalla restaurant",
        title: "Moroccan Mint Tea Experience",
      },
      {
        image:
          "/agafay-takerkoust/atlas-mountains-restaurant-panoramic-view-marrakech.webp",
        alt: "Stunning panoramic views of the snow-capped Atlas Mountains from a luxury dining table in Morocco",
        title: "Panoramic Atlas Mountains Dining",
      },
      {
        image:
          "/agafay-takerkoust/fine-dining-dessert-luxury-restaurant-morocco.webp",
        alt: "Exquisite fine dining Moroccan dessert beautifully plated at Casa Lalla in Takerkoust",
        title: "Fine Dining Moroccan Desserts",
      },
    ],
  },
  {
    pageUrl: "/", // English Homepage
    lastmod: "2026-06-01",
    priority: "0.9",
    images: [
      {
        image:
          "/agafay-takerkoust/sunset-cocktails-lalla-takerkoust-lounge.webp",
        alt: "Premium sunset cocktails at our Ibiza-style lounge bar terrace near Agafay",
        title: "Ibiza-Style Sunset Cocktails Lounge at Lake Takerkoust",
      },
      {
        image:
          "/agafay-takerkoust/restaurant-lake-view-casa-lalla-takerkoust.webp",
        alt: "Beautiful panoramic lake view from the Casa Lalla luxury restaurant terrace in Takerkoust",
        title: "Panoramic Lake View Restaurant Experience in Takerkoust",
      },
      {
        image: "/agafay-takerkoust/agafay-restaurants-marocain-marrakech.webp",
        alt: "Fine Moroccan dining experience at a premium luxury restaurant in the Agafay Desert",
        title: "Fine Moroccan Dining in the Agafay Desert",
      },
      {
        image:
          "/agafay-takerkoust/tourists-enjoying-drinks-lalla-takerkoust.webp",
        alt: "Tourists enjoying an exclusive Mykonos vibe day club experience with refreshing drinks at Lake Lalla Takerkoust",
        title: "Exclusive Mykonos Vibe Day Club at Lake Takerkoust",
      },
      {
        image:
          "/agafay-takerkoust/destination-wedding-marrakech-lake-takerkoust.webp",
        alt: "Elegant boho-chic destination wedding ceremony setup at Lake Lalla Takerkoust near Marrakech",
        title: "Luxury Destination Weddings at Lake Lalla Takerkoust",
      },
      {
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-entrance-marrakech.webp",
        alt: "The welcoming grand entrance to Casa Lalla Takerkoust near Marrakech featuring luxury beach club aesthetics",
        title: "Welcome to Casa Lalla Takerkoust Near Marrakech",
      },
      {
        image: "/agafay-takerkoust/corporate-event-venue-marrakech-lake.webp",
        alt: "Sophisticated Mykonos-inspired boho-chic lounge setup for private VIP and corporate events at Lake Takerkoust",
        title: "VIP Corporate Events in a Chic Mykonos-Inspired Desert Oasis",
      },
      {
        image:
          "/agafay-takerkoust/boho-chic-lounge-mykonos-vibe-lalla-takerkoust.webp",
        alt: "Mykonos-inspired boho-chic lounge setup offering a relaxing VIP desert oasis experience",
        title: "Mykonos-Inspired Boho-Chic Lounge Oasis",
      },
      {
        image:
          "/agafay-takerkoust/seafood-pasta-mediterranean-dining-morocco.webp",
        alt: "Fresh Mediterranean seafood pasta served at our luxury lakefront restaurant near Marrakech with a chic Ibiza atmosphere",
        title:
          "Premium Mediterranean Seafood Dining with a Chic Ibiza Atmosphere",
      },
      {
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-lake-view-terrace.webp",
        alt: "Chic Ibiza-style lakefront terrace at Casa Lalla Takerkoust offering stunning waterfront views",
        title: "Chic Lakefront Dining Terrace at Casa Lalla",
      },
      {
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-best-restaurants-agafay.webp",
        alt: "Le Casa Lalla, reconnu comme l'un des meilleurs restaurants de luxe près du désert d'Agafay",
        title: "Casa Lalla : Meilleur Restaurant près d'Agafay",
      },
      {
        image:
          "/agafay-takerkoust/ambiance-agafay-vibes-meilleur-restaurants.webp",
        alt: "Ambiance chaleureuse et festive aux vibrations d'Agafay au cœur du restaurant Casa Lalla",
        title: "Ambiance Festive Agafay Vibes au Casa Lalla",
      },
      {
        image:
          "/agafay-takerkoust/hidden-gem-restaurant-marrakech-lake-takerkoust.webp",
        alt: "Beautiful exterior and dining area of Casa Lalla, a hidden gem restaurant near Marrakech",
        title: "Casa Lalla Restaurant Exterior & Dining",
      },
      {
        image:
          "/agafay-takerkoust/sunset-restaurant-lake-takerkoust-marrakech.webp",
        alt: "Breathtaking sunset view from Casa Lalla restaurant terrace overlooking Lake Takerkoust near Marrakech",
        title: "Sunset Dining at Lake Takerkoust, Morocco",
      },
      {
        image:
          "/agafay-takerkoust/fine-dining-interior-casa-lalla-takerkoust.webp",
        alt: "Elegant fine dining interior and welcoming restaurant atmosphere at Casa Lalla Takerkoust",
        title: "Mykonos Vibe Elegant Dining Room at Casa Lalla",
      },
      {
        image:
          "/agafay-takerkoust/adrenaline-quad-biking-marrakech-desert.webp",
        alt: "High-speed quad bike tour and thrilling luxury activities near our Ibiza style day club in the Agafay Desert",
        title: "Thrilling Luxury Activities & Tours Near Lake Takerkoust",
      },
      {
        image: "/agafay-takerkoust/private-event-wedding-setup-casa-lalla.webp",
        alt: "Beautiful table setup for a private event and unforgettable wedding celebration at Casa Lalla Takerkoust venue",
        title:
          "Exclusive Ibiza Style Venue for Private Events at Lake Takerkoust",
      },
    ],
  },
];

// Build the XML structure
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

// Loop through each page
sitePages.forEach((page) => {
  const lastmod = page.lastmod || new Date().toISOString().split("T")[0];
  xml += `  <url>\n`;
  xml += `    <loc>${DOMAIN}${page.pageUrl}</loc>\n`; // The specific page (e.g., /fr/galerie)
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;

  // Loop through the images on that specific page
  page.images.forEach((item) => {
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${DOMAIN}${item.image}</image:loc>\n`;

    // Safely escape the alt text
    const captions = ["Restaurant Casa Lalla Takerkoust agafay vibes"];
    const tags = captions.join(" | ");
    const safeCaption = escapeXML(`${item.alt} | ${tags}`);
    xml += `      <image:caption>${safeCaption}</image:caption>\n`;

    // Safely escape the title (or fallback to alt)
    const rawTitle = item.title ? item.title : item.alt;
    const safeTitle = escapeXML(rawTitle);
    xml += `      <image:title>${safeTitle}</image:title>\n`;
    xml += `      <image:geo_location>Marrakech, Morocco</image:geo_location>\n`;
    xml += `    </image:image>\n`;
  });

  xml += `  </url>\n`;
});

xml += `</urlset>`;

// Save it
fs.writeFileSync(path.join(__dirname, "public", "image-sitemap.xml"), xml);
console.log("✅ Multi-page Image Sitemap generated successfully!");
