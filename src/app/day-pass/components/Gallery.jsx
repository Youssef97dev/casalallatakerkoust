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
];

const Gallery = () => {
  return (
    <section className="px-5 md:px-14 py-12 space-y-8 pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full aspect-square ">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className={`object-cover aspect-square h-full ${category.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
