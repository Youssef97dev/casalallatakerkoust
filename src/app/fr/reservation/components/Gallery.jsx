import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image:
      "/agafay-takerkoust/authentic-moroccan-cuisine-casa-lalla-takerkoust.webp",
    alt: "Gastronomie marocaine authentique dans un cadre intérieur élégant de style Mykonos à Casa Lalla Takerkoust près du désert d'Agafay",
    title: "Gastronomie Marocaine Authentique dans un Cadre Chic Façon Mykonos",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/restaurant-lake-view-casa-lalla-takerkoust.webp",
    alt: "Terrasse de restauration de luxe au bord du lac avec une ambiance exclusive d'Ibiza et des vues imprenables sur le lac Takerkoust",
    title: "Terrasse de Luxe au Bord du Lac avec Ambiance Exclusive d'Ibiza",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/spanish-tapas-mediterranean-food-marrakech.webp",
    alt: "Cuisine méditerranéenne gastronomique et tapas espagnoles servies dans l'oasis de luxe de notre restaurant de style Ibiza près d'Agafay",
    title: "Cuisine Méditerranéenne et Tapas Premium dans une Oasis de Luxe",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/quad-tour-agafay-desert-marrakech.webp",
    alt: "Excursion riche en adrénaline en quad dans le désert d'Agafay suivie d'une expérience VIP en day club de luxe près de l'Atlas",
    title: "Excursion Palpitante en Quad à Agafay et Expérience VIP de Luxe",
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
