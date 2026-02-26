import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image:
      "/agafay-takerkoust/authentic-moroccan-cuisine-casa-lalla-takerkoust.webp",
    alt: "Salle de restaurant intérieure élégante à Casa Lalla Takerkoust avec décoration marocaine raffinée et ambiance sophistiquée pour le déjeuner ou le dîner",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/restaurant-lake-view-casa-lalla-takerkoust.webp",
    alt: "Terrasse panoramique au bord de l'eau à Casa Lalla Takerkoust avec vue imprenable sur le lac Takerkoust, destination idéale pour une excursion près de Marrakech",
    class: "object-center",
  },
  {
    image:
      "/agafay-takerkoust/outdoor-dining-terrace-casa-lalla-takerkoust.webp",
    alt: "Vue extérieure du restaurant de luxe Casa Lalla Takerkoust et de ses jardins, une oasis de premier plan au bord du lac dans la région du désert d'Agafay",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/quad-tour-agafay-desert-marrakech.webp",
    alt: "Aventure palpitante en quad au lac Takerkoust organisée par Casa Lalla, exploration des paysages sauvages au pied des montagnes de l'Atlas",
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
