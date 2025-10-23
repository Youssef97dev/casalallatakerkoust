import React from "react";
import Image from "next/image";
import Link from "next/link";

const spaces = [
  {
    title: "Restaurant",
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/48/agafay-9498718_960_720.jpg",
  },
  {
    title: "Activities",
    image: "https://casalallatakerkoust.com/images/activities.webp",
  },
  {
    title: "Rooftop Private Events",
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/00/marrakech-9498586_1280.jpg",
  },
];

const OurSpaces = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-[35px] leading-[42px] font-canela text-casa_black mb-10">
        Our Spaces
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {spaces.map((space, index) => (
          <Link
            key={index}
            href="#"
            className="relative group overflow-hidden shadow-md"
          >
            <Image
              src={space.image}
              alt={space.title}
              width={600}
              height={600}
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-all duration-500" />
            <h3 className="absolute inset-0 flex items-center justify-center text-casa_background text-[35px] leading-[55px] font-canela font-light tracking-wide italic px-14">
              {space.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurSpaces;
