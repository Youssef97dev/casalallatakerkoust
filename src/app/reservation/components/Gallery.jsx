import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image:
      "/agafay-takerkoust/authentic-moroccan-cuisine-casa-lalla-takerkoust.webp",
    alt: "Authentic Moroccan fine dining in an elegant Mykonos-style indoor setting at Casa Lalla Takerkoust near the Agafay Desert",
    title: "Authentic Moroccan Fine Dining in a Chic Mykonos-Style Setting",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/restaurant-lake-view-casa-lalla-takerkoust.webp",
    alt: "Luxury lakeside dining terrace with exclusive Ibiza vibes and stunning views of Lake Takerkoust, the perfect Marrakech day club destination",
    title: "Luxury Lakeside Dining Terrace with Exclusive Ibiza Vibes",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/spanish-tapas-mediterranean-food-marrakech.webp",
    alt: "Gourmet Mediterranean food and Spanish tapas served in the luxury garden oasis of our Ibiza-style restaurant near the Agafay Desert",
    title: "Premium Mediterranean Food & Tapas in a Luxury Garden Oasis",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/quad-tour-agafay-desert-marrakech.webp",
    alt: "Action-packed Agafay Desert quad tour adventure paired with a luxury VIP day club experience near the Atlas Mountains",
    title: "Thrilling Agafay Desert Quad Tour & VIP Luxury Experience",
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
                title={category.title}
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
