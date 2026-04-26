import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image:
      "/agafay-takerkoust/authentic-moroccan-cuisine-casa-lalla-takerkoust.webp",
    alt: "Elegant indoor dining area at Casa Lalla Takerkoust featuring refined Moroccan decor and a sophisticated atmosphere for lunch or dinner",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/restaurant-lake-view-casa-lalla-takerkoust.webp",
    alt: "Panoramic lakeside dining terrace at Casa Lalla Takerkoust with stunning views of Lake Takerkoust, the perfect Marrakech day trip destination",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/spanish-tapas-mediterranean-food-marrakech.webp",
    alt: "Exterior view of the luxury Casa Lalla Takerkoust restaurant and garden, a premier lakeside oasis in the Agafay desert region",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/quad-tour-agafay-desert-marrakech.webp",
    alt: "Thrilling quad biking adventure at Lake Takerkoust organized by Casa Lalla, exploring the rugged landscapes near the Atlas Mountains",
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
