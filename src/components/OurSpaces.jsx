import React from "react";
import Image from "next/image";
import Link from "next/link";

const spaces = [
  {
    title: "Restaurant",
    image: "/agafay-takerkoust/private-tent-dining-agafay-desert-luxury.webp",
    alt: "Private luxury dining tent with VIP service offering a chic Mykonos vibe experience in the Agafay Desert",
    title_image: "Mykonos Vibe Private Luxury Dining in the Agafay Desert",
    link: "/restaurant-casa-lalla",
  },
  {
    title: "Activities",
    image: "/agafay-takerkoust/adrenaline-quad-biking-marrakech-desert.webp",
    alt: "High-speed quad bike tour and thrilling luxury activities near our Ibiza style day club in the Agafay Desert",
    title_image: "Thrilling Luxury Activities & Tours Near Lake Takerkoust",
    link: "/lalla-takerkoust-activities",
  },
  {
    title: "Private Events",
    image: "/agafay-takerkoust/takerkoust-restaurants-marrakech.webp",
    alt: "Sophisticated Ibiza style private event venue and fine dining at Lake Lalla Takerkoust near Marrakech",
    title_image:
      "Exclusive Ibiza Style Venue for Private Events at Lake Takerkoust",
    link: "/private-events",
  },
];

const OurSpaces = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-[35px] leading-[42px] 2xl:text-[55px] 2xl:leading-[62px] font-canela text-casa_black mb-10">
        Our Spaces
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
              loading="lazy"
              width={600}
              height={600}
              className="w-full h-[500px] 2xl:h-[800px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-all duration-500" />
            <h3 className="absolute inset-0 flex items-center justify-center text-casa_background text-[35px] leading-[55px] 2xl:text-[55px] 2xl:leading-[75px] font-canela font-light tracking-wide italic px-14">
              {space.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurSpaces;
