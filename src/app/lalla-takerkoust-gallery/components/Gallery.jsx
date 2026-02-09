import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/agafay-gallery/restaurants-agafay-near-me.webp",
    alt: "Breathtaking sunset views over Lac Takerkoust, a peaceful escape from busy restaurants marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-luxury-camp-private-event.webp",
    alt: "Chic rooftop lounge with premium agafay vibes and panoramic desert views",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/romantic-dinner-agafay-desert-under-stars.webp",
    alt: "Elegant dinner service at Lac Takerkoust, matching the luxury standards of Royal Mansour",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-near-me.webp",
    alt: "Refined seafood pastilla at Casa Lalla, the ultimate restaurants marocain experience",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-marocain-marrakech-show.webp",
    alt: "Palace-level hospitality and gardens inspired by the legendary Mamounia hotel",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/lalla-takerkoust-marrakech-weather-sunset.webp",
    alt: "Golden hour in the agafay desert, perfect for a luxury sunset dinner near Marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-day-trip.webp",
    alt: "Mediterranean mezze at Lac Takerkoust, a top choice among trendy restaurants marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-near-me-marrakech-mezze.webp",
    alt: "Signature cocktails on the rooftop at sunset with authentic agafay vibes",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/resturants-marocains-marrakech-agafay.webp",
    alt: "Traditional Moroccan royal couscous, a highlight of restaurants marocains marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-agafay-poolside-lunch.webp",
    alt: "Exploring the rocky agafay desert during a luxury day trip from Marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/private-events-restaurants-agafay-desert.webp",
    alt: "Intricate Moroccan decor at Casa Lalla, rivaling the beauty of Royal Mansour restaurants marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-marocain-marrakech-garden.webp",
    alt: "Romantic sunset reflection on Lac Takerkoust during a private lakeside dinner",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-agafay-boho-chic-decor.webp",
    alt: "Luxury pool day experience with Mamounia style service and Atlas mountain views",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-agafay.webp",
    alt: "Gourmet slow-cooked lamb Méchoui, a specialty for any fine restaurants marocain",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/lalla-takerkoust-lake-weather-marrakech.webp",
    alt: "agafay vibes during a magical sunset",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-buggy-tour-marrakech.webp",
    alt: "Elevated view from our rooftop terrace over the serene waters of Lac Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/quad-biking-agafay-desert-marrakech.webp",
    alt: "High-end mixology and creative drinks at the best festive restaurants marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-day-trip-shuttle-service.webp",
    alt: "Attentive private butler service at Agafay, a royal mansour standard of excellence",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/mechoui-roasted-lamb-desert-dinner.webp",
    alt: "Panoramic views of the Lac Takerkoust dam and the snowy High Atlas peaks",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/spanish-paella-lakeside-marrakech-restaurant.webp",
    alt: "Lush Mediterranean gardens for a peaceful escape similar to the Mamounia park",
    class: "object-center",
  },
  {
    image:
      "/agafay-gallery/lobster-pastilla-mediterranean-cuisine-marrakech.webp",
    alt: "Vibrant assortment of Moroccan salads at the best restaurants marocains marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/yoga-lalla-takerkoust-lake-meditation.webp",
    alt: "Sophisticated outdoor dining with authentic agafay vibes at our luxury desert camp",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/lakeside-picnic-atlas-mountains-view.webp",
    alt: "Nightly stargazing sessions from our rooftop in the clear agafay desert skies",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/mastiha-signature-cocktail-marrakech-lounge.webp",
    alt: "Fresh grilled octopus and seafood, a Mediterranean staple among restaurants marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-marocain-marrakech-chef.webp",
    alt: "The perfect sunset aperitif at our lounge bar overlooking Lac Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/mediterranean-mezze-platter-boho-chic.webp",
    alt: "Elegant afternoon tea service inspired by the world-famous Mamounia tradition",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/floating-breakfast-heart-tray-private-pool.webp",
    alt: "Action-packed quad biking tour through the rocky landscape of the agafay desert",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/organic-herb-garden-sustainable-culinary.webp",
    alt: "Chic rooftop lounge with premium agafay vibes and panoramic desert views",
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
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt={category.alt}
                loading="lazy"
                fill
                className={`object-cover h-full lg:rounded-md ${category.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
