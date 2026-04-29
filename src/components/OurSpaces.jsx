import React from "react";
import Image from "next/image";
import Link from "next/link";

const spaces = [
  {
    title: "Restaurant",
    image: "/agafay-takerkoust/fine-dining-interior-casa-lalla-takerkoust.webp",
    alt: "Elegant fine dining interior and welcoming restaurant atmosphere at Casa Lalla Takerkoust",
    title_image: "Mykonos Vibe Elegant Dining Room at Casa Lalla",
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
    image: "/agafay-takerkoust/private-event-wedding-setup-casa-lalla.webp",
    alt: "Beautiful table setup for a private event and unforgettable wedding celebration at Casa Lalla Takerkoust venue",
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
