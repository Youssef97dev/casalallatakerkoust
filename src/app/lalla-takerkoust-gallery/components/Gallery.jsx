import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image:
      "/agafay-takerkoust/casa-lalla-takerkoust-restaurant-ibiza-style-marrakech.webp",
    alt: "Exclusive Ibiza style restaurant and day club at Lake Lalla Takerkoust near Marrakech",
    title: "Experience Ibiza Style Luxury Dining at Lake Takerkoust Marrakech",
    class: "object-center",
  },
  {
    image:
      "/agafay-takerkoust/mediterranean-restaurant-atmosphere-marrakech.webp",
    alt: "Chic Mediterranean restaurant atmosphere with a Mykonos vibe in Marrakech",
    title: "Mykonos-Inspired Mediterranean Dining Oasis Near Agafay",
    class: "object-center",
  },
  {
    image:
      "/agafay-takerkoust/bohemian-terrace-dining-casa-lalla-takerkoust.webp",
    alt: "Boho-chic terrace dining at Casa Lalla Takerkoust offering a luxury desert experience",
    title: "Bohemian Luxury Terrace Dining Outside Marrakech",
    class: "object-center",
  },
  {
    image:
      "/agafay-takerkoust/atlas-mountains-view-from-restaurant-marrakech.webp",
    alt: "Breathtaking Atlas Mountains view from a luxury day club and restaurant in Marrakech",
    title: "Panoramic Atlas Mountain Views from Our Lakeside Restaurant",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/spanish-tapas-mediterranean-food-marrakech.webp",
    alt: "Gourmet Spanish tapas and Mediterranean food served at an upscale Marrakech restaurant",
    title: "Premium Spanish Tapas & Mediterranean Cuisine in Marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/signature-cocktails-day-club-marrakech.webp",
    alt: "Signature craft cocktails at a luxury day club by Lake Takerkoust with Ibiza party vibes",
    title: "Refresh with Signature Cocktails at Our Marrakech Day Club",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/casa-lalla-takerkoust-entrance-marrakech.webp",
    alt: "Grand entrance to Casa Lalla Takerkoust, a premier Mykonos-style oasis near Marrakech",
    title: "Welcome to Casa Lalla Takerkoust: Your Lakeside Oasis",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/romantic-dinner-agafay-desert-under-stars.webp",
    alt: "Elegant romantic dinner setup under the stars in the Agafay Desert with luxury service",
    title: "Unforgettable Romantic Desert Dinner Under the Stars",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/tourists-enjoying-drinks-lalla-takerkoust.webp",
    alt: "International tourists enjoying drinks and Ibiza beach club vibes at Lalla Takerkoust",
    title: "Enjoy Ibiza Beach Club Vibes at Lake Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/lalla-takerkoust-marrakech-weather-sunset.webp",
    alt: "Golden hour sunset dinner at a luxury Agafay desert restaurant with perfect Marrakech weather",
    title: "Golden Hour Luxury Sunset Dinner Near Marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-day-trip.webp",
    alt: "Premium Mediterranean mezze platter served during a luxury Agafay Desert day trip",
    title: "Indulge in Mediterranean Mezze on Your Agafay Day Trip",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-agafay-poolside-lunch.webp",
    alt: "Luxury poolside lunch with Ibiza vibes in the rocky landscape of the Agafay desert",
    title: "Luxury Poolside Lunch in the Agafay Desert",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/private-events-restaurants-agafay-desert.webp",
    alt: "Intricate Moroccan boho-chic decor at Casa Lalla, perfect for private events near Marrakech",
    title: "Boho-Chic Private Event Venue at Casa Lalla Agafay",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/casa-lalla-takerkoust-agafay-desert-view.webp",
    alt: "Panoramic view of Casa Lalla Takerkoust luxury day club situated near the Agafay desert",
    title: "Stunning Panoramic Views of Casa Lalla Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/authentic-moroccan-food-marrakech-restaurants.webp",
    alt: "Authentic high-end Moroccan food platter served at a trendy restaurant near Marrakech",
    title: "High-End Authentic Moroccan Food Tasting",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-pool-ibiza-vibe-marrakech.webp",
    alt: "Relaxing by the luxury pool at Casa Lalla Takerkoust with an exclusive Ibiza day club vibe",
    title: "Exclusive Ibiza Vibe Poolside Lounge in Marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/luxury-dining-takerkoust-mykonos-style.webp",
    alt: "Outdoor luxury dining experience at Casa Lalla featuring a chic Mykonos aesthetic",
    title: "Chic Mykonos-Style Outdoor Luxury Dining",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/best-moroccan-food-lunch-lake-takerkoust.webp",
    alt: "VIP guests enjoying a premium Moroccan food lunch overlooking Lake Takerkoust",
    title: "Premium Moroccan Lunch Overlooking Lake Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/sunset-party-agafay-ibiza-atmosphere.webp",
    alt: "Vibrant sunset party atmosphere at Casa Lalla in Agafay featuring world-class Ibiza energy",
    title: "Vibrant Ibiza-Style Sunset Party at Casa Lalla",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/chic-desert-oasis-design-mykonos-inspiration.webp",
    alt: "Chic desert oasis design of Casa Lalla drawing inspiration from luxury Mykonos architecture",
    title: "Discover Our Mykonos-Inspired Desert Oasis",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/casa-lalla-agafay-menu-moroccan-cuisine.webp",
    alt: "A gourmet spread of traditional Moroccan cuisine from the exclusive Casa Lalla Agafay menu",
    title: "Gourmet Moroccan Cuisine from the Casa Lalla Menu",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/lalla-takerkoust-lake-weather-marrakech.webp",
    alt: "Magical sunset over Lake Takerkoust with premium boho-chic Agafay desert vibes",
    title: "Magical Sunset Views and Boho-Chic Desert Vibes",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-buggy-tour-marrakech.webp",
    alt: "Elevated rooftop terrace view over the serene waters of Lake Takerkoust after a buggy tour",
    title: "Rooftop Terrace Views over Serene Lake Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/quad-biking-agafay-desert-marrakech.webp",
    alt: "High-end mixology and creative cocktails at the best festive day club in Marrakech",
    title: "Festive Day Club Mixology & Creative Cocktails",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-day-trip-shuttle-service.webp",
    alt: "Attentive VIP service at an Agafay desert luxury camp providing a 5-star guest experience",
    title: "5-Star VIP Service in the Agafay Desert",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/mechoui-roasted-lamb-desert-dinner.webp",
    alt: "Panoramic views of the Lake Takerkoust dam and the snow-capped High Atlas Mountains",
    title: "Breathtaking Views of Lake Takerkoust and the Atlas Mountains",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/spanish-paella-lakeside-marrakech-restaurant.webp",
    alt: "Lush Mediterranean gardens for a peaceful escape combining Ibiza chill out with Marrakech charm",
    title: "Peaceful Mediterranean Gardens with Ibiza Chill Vibes",
    class: "object-center",
  },
  {
    image:
      "/agafay-gallery/lobster-pastilla-mediterranean-cuisine-marrakech.webp",
    alt: "Vibrant assortment of premium Moroccan salads at a top luxury restaurant in Marrakech",
    title: "Premium Assortment of Authentic Moroccan Salads",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/yoga-lalla-takerkoust-lake-meditation.webp",
    alt: "Sophisticated outdoor dining with authentic Agafay vibes at our luxury Mykonos-style camp",
    title: "Sophisticated Outdoor Dining with Agafay Desert Vibes",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/lakeside-picnic-atlas-mountains-view.webp",
    alt: "Nightly stargazing sessions from our rooftop terrace under the clear Agafay desert skies",
    title: "Rooftop Stargazing Sessions in the Agafay Desert",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/mastiha-signature-cocktail-marrakech-lounge.webp",
    alt: "Fresh grilled Mediterranean octopus and seafood, a staple at our Mykonos-inspired restaurant",
    title: "Fresh Grilled Mediterranean Seafood & Octopus",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-marocain-marrakech-chef.webp",
    alt: "The perfect sunset aperitif at our luxury lounge bar overlooking Lake Lalla Takerkoust",
    title: "Enjoy the Perfect Sunset Aperitif Overlooking the Lake",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/mediterranean-mezze-platter-boho-chic.webp",
    alt: "Elegant boho-chic afternoon tea service offering a luxury experience near Marrakech",
    title: "Elegant Boho-Chic Afternoon Tea Experience",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/floating-breakfast-heart-tray-private-pool.webp",
    alt: "Action-packed quad biking and buggy tour through the rocky landscape of the Agafay desert",
    title: "Action-Packed Agafay Desert Quad Biking Tour",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/organic-herb-garden-sustainable-culinary.webp",
    alt: "Chic rooftop lounge with premium Ibiza vibes and panoramic Agafay desert sunset views",
    title: "Chic Rooftop Lounge with Premium Ibiza Sunset Vibes",
    class: "object-center",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="px-0 md:px-14 py-12 space-y-8 pt-[1.5px] lg:pt-14"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-[1.5px]">
        {GalleryImage.map((category, index) => (
          <figure key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt={category.alt}
                title={category.title}
                priority={index < 4}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover h-full lg:rounded-md ${category.class}`}
              />
            </div>
            {/* Optional: If you ever want to display the image title cleanly */}
            <figcaption className="sr-only">{category.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
