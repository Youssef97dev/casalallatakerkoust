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

const DOMAIN = "https://casalallatakerkoust.com";

// Group your images by the page they actually appear on
const sitePages = [
  // --- ENGLISH PAGES ---
  {
    pageUrl: "/gallery",
    images: [
      {
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-restaurant-ibiza-style-marrakech.webp",
        alt: "Exclusive Ibiza style restaurant and day club at Lake Lalla Takerkoust near Marrakech",
        title:
          "Experience Ibiza Style Luxury Dining at Lake Takerkoust Marrakech",
      },
      {
        image:
          "/agafay-takerkoust/mediterranean-restaurant-atmosphere-marrakech.webp",
        alt: "Chic Mediterranean restaurant atmosphere with a Mykonos vibe in Marrakech",
        title: "Mykonos-Inspired Mediterranean Dining Oasis Near Agafay",
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
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-entrance-marrakech.webp",
        alt: "Grand entrance to Casa Lalla Takerkoust, a premier Mykonos-style oasis near Marrakech",
        title: "Welcome to Casa Lalla Takerkoust: Your Lakeside Oasis",
      },
      {
        image: "/agafay-gallery/romantic-dinner-agafay-desert-under-stars.webp",
        alt: "Elegant romantic dinner setup under the stars in the Agafay Desert with luxury service",
        title: "Unforgettable Romantic Desert Dinner Under the Stars",
      },
      {
        image:
          "/agafay-takerkoust/tourists-enjoying-drinks-lalla-takerkoust.webp",
        alt: "International tourists enjoying drinks and Ibiza beach club vibes at Lalla Takerkoust",
        title: "Enjoy Ibiza Beach Club Vibes at Lake Takerkoust",
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
    ],
  },
  {
    pageUrl: "/", // English Homepage
    images: [
      {
        image:
          "/agafay-takerkoust/sunset-cocktails-lalla-takerkoust-lounge.webp",
        alt: "Premium sunset cocktails at our Ibiza-style lounge bar terrace overlooking Lake Lalla Takerkoust near Agafay",
        title: "Experience Ibiza-Style Sunset Cocktails at Lake Takerkoust",
      },
      {
        image: "/agafay-takerkoust/agafay-restaurants-marocain-marrakech.webp",
        alt: "Tourists enjoying an exclusive Mykonos vibe day club experience and fine Moroccan dining in the Agafay Desert",
        title:
          "Exclusive Mykonos Vibe Day Club & Restaurant in the Agafay Desert",
      },
      {
        image:
          "/agafay-takerkoust/destination-wedding-marrakech-lake-takerkoust.webp",
        alt: "Elegant boho-chic destination wedding ceremony at Casa Lalla Takerkoust with luxury Ibiza beach club aesthetics",
        title: "Luxury Boho-Chic Destination Weddings at Lake Lalla Takerkoust",
      },
      {
        image: "/agafay-takerkoust/corporate-event-venue-marrakech-lake.webp",
        alt: "Sophisticated Mykonos-inspired boho-chic lounge setup for private VIP and corporate events at Lake Takerkoust",
        title: "VIP Corporate Events in a Chic Mykonos-Inspired Desert Oasis",
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

  // --- FRENCH PAGES ---
  {
    pageUrl: "/fr/gallery", // Make sure this matches your exact Next.js route
    images: [
      {
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-restaurant-ibiza-style-marrakech.webp",
        alt: "Restaurant et day club exclusif de style Ibiza au bord du lac Lalla Takerkoust près de Marrakech",
        title:
          "Découvrez un dîner de luxe de style Ibiza au lac Takerkoust à Marrakech",
      },
      {
        image:
          "/agafay-takerkoust/mediterranean-restaurant-atmosphere-marrakech.webp",
        alt: "Atmosphère chic de restaurant méditerranéen avec une ambiance Mykonos à Marrakech",
        title:
          "Oasis de restauration méditerranéenne inspirée de Mykonos près d'Agafay",
      },
      {
        image:
          "/agafay-takerkoust/bohemian-terrace-dining-casa-lalla-takerkoust.webp",
        alt: "Dîner sur terrasse boho-chic à Casa Lalla Takerkoust offrant une expérience de luxe dans le désert",
        title: "Dîner de luxe sur une terrasse bohème aux portes de Marrakech",
      },
      {
        image:
          "/agafay-takerkoust/atlas-mountains-view-from-restaurant-marrakech.webp",
        alt: "Vue imprenable sur les montagnes de l'Atlas depuis un day club et restaurant de luxe à Marrakech",
        title:
          "Vues panoramiques sur les montagnes de l'Atlas depuis notre restaurant au bord du lac",
      },
      {
        image:
          "/agafay-takerkoust/spanish-tapas-mediterranean-food-marrakech.webp",
        alt: "Tapas espagnoles gastronomiques et cuisine méditerranéenne servies dans un restaurant haut de gamme de Marrakech",
        title:
          "Tapas espagnoles de qualité supérieure et cuisine méditerranéenne à Marrakech",
      },
      {
        image: "/agafay-takerkoust/signature-cocktails-day-club-marrakech.webp",
        alt: "Cocktails artisanaux signatures dans un day club de luxe au bord du lac Takerkoust avec une ambiance de fête d'Ibiza",
        title:
          "Rafraîchissez-vous avec des cocktails signatures dans notre Day Club à Marrakech",
      },
      {
        image:
          "/agafay-takerkoust/casa-lalla-takerkoust-entrance-marrakech.webp",
        alt: "Entrée grandiose de Casa Lalla Takerkoust, une oasis de premier plan de style Mykonos près de Marrakech",
        title: "Bienvenue à Casa Lalla Takerkoust : Votre oasis au bord du lac",
      },
      {
        image: "/agafay-gallery/romantic-dinner-agafay-desert-under-stars.webp",
        alt: "Dîner romantique et élégant sous les étoiles dans le désert d'Agafay avec un service de luxe",
        title: "Dîner romantique inoubliable dans le désert sous les étoiles",
      },
      {
        image:
          "/agafay-takerkoust/tourists-enjoying-drinks-lalla-takerkoust.webp",
        alt: "Touristes internationaux dégustant des verres dans une ambiance de beach club d'Ibiza à Lalla Takerkoust",
        title:
          "Profitez de l'ambiance des beach clubs d'Ibiza au lac Takerkoust",
      },
      {
        image: "/agafay-gallery/lalla-takerkoust-marrakech-weather-sunset.webp",
        alt: "Dîner au coucher du soleil à l'heure dorée dans un restaurant de luxe du désert d'Agafay sous le climat idéal de Marrakech",
        title:
          "Dîner de luxe au coucher du soleil pendant l'heure dorée près de Marrakech",
      },
      {
        image: "/agafay-gallery/agafay-desert-day-trip.webp",
        alt: "Plateau de mezze méditerranéen de qualité supérieure servi lors d'une excursion de luxe dans le désert d'Agafay",
        title:
          "Savourez des mezze méditerranéens lors de votre excursion à Agafay",
      },
      {
        image: "/agafay-gallery/restaurants-agafay-poolside-lunch.webp",
        alt: "Déjeuner de luxe au bord de la piscine avec une ambiance d'Ibiza dans le paysage rocheux du désert d'Agafay",
        title: "Déjeuner de luxe au bord de la piscine dans le désert d'Agafay",
      },
      {
        image: "/agafay-gallery/private-events-restaurants-agafay-desert.webp",
        alt: "Décor marocain boho-chic sophistiqué à Casa Lalla, idéal pour des événements privés près de Marrakech",
        title: "Lieu d'événement privé boho-chic à Casa Lalla Agafay",
      },
      {
        image: "/agafay-gallery/casa-lalla-takerkoust-agafay-desert-view.webp",
        alt: "Vue panoramique sur le day club de luxe Casa Lalla Takerkoust situé près du désert d'Agafay",
        title: "Vues panoramiques époustouflantes sur Casa Lalla Takerkoust",
      },
      {
        image:
          "/agafay-gallery/authentic-moroccan-food-marrakech-restaurants.webp",
        alt: "Plateau de plats marocains authentiques et haut de gamme servi dans un restaurant branché près de Marrakech",
        title: "Dégustation de plats marocains authentiques et haut de gamme",
      },
      {
        image: "/agafay-gallery/agafay-desert-pool-ibiza-vibe-marrakech.webp",
        alt: "Détente au bord de la piscine de luxe de Casa Lalla Takerkoust avec une ambiance exclusive de day club d'Ibiza",
        title: "Lounge exclusif au bord de la piscine façon Ibiza à Marrakech",
      },
      {
        image: "/agafay-gallery/luxury-dining-takerkoust-mykonos-style.webp",
        alt: "Expérience de repas de luxe en plein air à Casa Lalla avec une esthétique chic de Mykonos",
        title: "Dîner de luxe en plein air de style Mykonos chic",
      },
      {
        image: "/agafay-gallery/best-moroccan-food-lunch-lake-takerkoust.webp",
        alt: "Invités VIP profitant d'un déjeuner marocain haut de gamme avec vue sur le lac Takerkoust",
        title: "Déjeuner marocain haut de gamme avec vue sur le lac Takerkoust",
      },
      {
        image: "/agafay-gallery/sunset-party-agafay-ibiza-atmosphere.webp",
        alt: "Atmosphère vibrante de fête au coucher du soleil à Casa Lalla à Agafay, avec une énergie digne des meilleures soirées d'Ibiza",
        title: "Fête vibrante au coucher du soleil de style Ibiza à Casa Lalla",
      },
      {
        image:
          "/agafay-gallery/chic-desert-oasis-design-mykonos-inspiration.webp",
        alt: "Design d'oasis chic dans le désert de Casa Lalla, inspiré de l'architecture de luxe de Mykonos",
        title: "Découvrez notre oasis dans le désert inspirée de Mykonos",
      },
      {
        image: "/agafay-gallery/casa-lalla-agafay-menu-moroccan-cuisine.webp",
        alt: "Assortiment gourmand de cuisine marocaine traditionnelle issu du menu exclusif de Casa Lalla Agafay",
        title: "Cuisine marocaine gastronomique du menu de Casa Lalla",
      },
      {
        image: "/agafay-gallery/lalla-takerkoust-lake-weather-marrakech.webp",
        alt: "Coucher de soleil magique sur le lac Takerkoust avec une ambiance bohème chic haut de gamme du désert d'Agafay",
        title:
          "Vues magiques au coucher du soleil et ambiance bohème chic dans le désert",
      },
      {
        image: "/agafay-gallery/agafay-desert-buggy-tour-marrakech.webp",
        alt: "Vue en hauteur depuis la terrasse sur le toit sur les eaux paisibles du lac Takerkoust après une excursion en buggy",
        title:
          "Vues depuis la terrasse sur le toit sur le paisible lac Takerkoust",
      },
      {
        image: "/agafay-gallery/quad-biking-agafay-desert-marrakech.webp",
        alt: "Mixologie haut de gamme et cocktails créatifs dans le meilleur day club festif de Marrakech",
        title: "Mixologie et cocktails créatifs dans notre Day Club festif",
      },
      {
        image: "/agafay-gallery/agafay-desert-day-trip-shuttle-service.webp",
        alt: "Service VIP attentionné dans un camp de luxe du désert d'Agafay offrant une expérience client 5 étoiles",
        title: "Service VIP 5 étoiles dans le désert d'Agafay",
      },
      {
        image: "/agafay-gallery/mechoui-roasted-lamb-desert-dinner.webp",
        alt: "Vues panoramiques sur le barrage du lac Takerkoust et les sommets enneigés du Haut Atlas",
        title:
          "Vues époustouflantes sur le lac Takerkoust et les montagnes de l'Atlas",
      },
      {
        image:
          "/agafay-gallery/spanish-paella-lakeside-marrakech-restaurant.webp",
        alt: "Jardins méditerranéens luxuriants pour une évasion paisible combinant la détente d'Ibiza et le charme de Marrakech",
        title:
          "Paisibles jardins méditerranéens avec une ambiance chill d'Ibiza",
      },
      {
        image:
          "/agafay-gallery/lobster-pastilla-mediterranean-cuisine-marrakech.webp",
        alt: "Assortiment vibrant de salades marocaines de première qualité dans un des meilleurs restaurants de luxe de Marrakech",
        title: "Assortiment premium de salades marocaines authentiques",
      },
      {
        image: "/agafay-gallery/yoga-lalla-takerkoust-lake-meditation.webp",
        alt: "Dîner sophistiqué en plein air avec une ambiance authentique d'Agafay dans notre camp de luxe de style Mykonos",
        title:
          "Dîner sophistiqué en plein air avec l'ambiance du désert d'Agafay",
      },
      {
        image: "/agafay-gallery/lakeside-picnic-atlas-mountains-view.webp",
        alt: "Séances nocturnes d'observation des étoiles depuis notre terrasse sur le toit sous le ciel dégagé du désert d'Agafay",
        title:
          "Séances d'observation des étoiles sur le toit dans le désert d'Agafay",
      },
      {
        image:
          "/agafay-gallery/mastiha-signature-cocktail-marrakech-lounge.webp",
        alt: "Poulpe grillé et fruits de mer frais de la Méditerranée, un incontournable de notre restaurant inspiré de Mykonos",
        title: "Fruits de mer méditerranéens et poulpe grillé",
      },
      {
        image: "/agafay-gallery/restaurants-marocain-marrakech-chef.webp",
        alt: "Le parfait apéritif au coucher du soleil dans notre bar lounge de luxe surplombant le lac Lalla Takerkoust",
        title:
          "Savourez le parfait apéritif au coucher du soleil avec vue sur le lac",
      },
      {
        image: "/agafay-gallery/mediterranean-mezze-platter-boho-chic.webp",
        alt: "Élégant service de thé de l'après-midi boho-chic offrant une expérience de luxe près de Marrakech",
        title: "Élégante expérience de thé de l'après-midi boho-chic",
      },
      {
        image:
          "/agafay-gallery/floating-breakfast-heart-tray-private-pool.webp",
        alt: "Excursion pleine d'action en quad et buggy à travers le paysage rocheux du désert d'Agafay",
        title: "Excursion trépidante en quad dans le désert d'Agafay",
      },
      {
        image: "/agafay-gallery/organic-herb-garden-sustainable-culinary.webp",
        alt: "Lounge chic sur le toit avec une ambiance premium d'Ibiza et des vues panoramiques sur le coucher de soleil dans le désert d'Agafay",
        title:
          "Lounge chic sur le toit avec ambiance coucher de soleil d'Ibiza",
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

    // Safely escape the alt text
    const safeAlt = escapeXML(item.alt);
    xml += `      <image:caption>${safeAlt}</image:caption>\n`;

    // Safely escape the title (or fallback to alt)
    const rawTitle = item.title ? item.title : item.alt;
    const safeTitle = escapeXML(rawTitle);
    xml += `      <image:title>${safeTitle}</image:title>\n`;

    xml += `    </image:image>\n`;
  });

  xml += `  </url>\n`;
});

xml += `</urlset>`;

// Save it
fs.writeFileSync(path.join(__dirname, "public", "image-sitemap.xml"), xml);
console.log("✅ Multi-page Image Sitemap generated successfully!");
