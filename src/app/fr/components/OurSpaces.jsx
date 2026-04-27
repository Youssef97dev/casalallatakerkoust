import React from "react";
import Image from "next/image";
import Link from "next/link";

const spaces = [
  {
    title: "Restaurant",
    image: "/agafay-takerkoust/private-tent-dining-agafay-desert-luxury.webp",
    alt: "Tente de restauration privée de luxe avec service VIP offrant une expérience chic ambiance Mykonos dans le désert d'Agafay",
    title_image: "Dîner de luxe privé ambiance Mykonos dans le désert d'Agafay",
    link: "/restaurant-casa-lalla",
  },
  {
    title: "Activités",
    image: "/agafay-takerkoust/adrenaline-quad-biking-marrakech-desert.webp",
    alt: "Excursion en quad à sensations fortes et activités de luxe près de notre day club de style Ibiza dans le désert d'Agafay",
    title_image:
      "Activités de luxe et excursions palpitantes près du lac Takerkoust",
    link: "/lalla-takerkoust-activities",
  },
  {
    title: "Événements Privés",
    image: "/agafay-takerkoust/takerkoust-restaurants-marrakech.webp",
    alt: "Lieu d'événement privé sophistiqué de style Ibiza et gastronomie au bord du lac Lalla Takerkoust près de Marrakech",
    title_image:
      "Lieu exclusif de style Ibiza pour événements privés au lac Takerkoust",
    link: "/private-events",
  },
];

const OurSpaces = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-[35px] leading-[42px] font-canela text-casa_black mb-10">
        Nos Espaces
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {spaces.map((space, index) => (
          <Link
            key={index}
            href={space.link}
            className="relative group overflow-hidden shadow-md"
          >
            <Image
              src={space.image}
              alt={space.alt}
              title={space.title_image}
              width={600}
              height={600}
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-all duration-500" />
            <h3 className="absolute inset-0 flex items-center justify-center text-casa_background text-[30px] leading-[55px] font-lora tracking-wide italic px-14">
              {space.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurSpaces;
