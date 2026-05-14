import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeSpaces } from "@/data/imageData";

const OurSpaces = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-[35px] leading-[42px] font-canela text-casa_black mb-10">
        Nos Espaces
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {HomeSpaces.map((space, index) => (
          <Link
            key={index}
            href={space.linkFr}
            className="relative group overflow-hidden shadow-md"
          >
            <Image
              src={space.image}
              alt={space.altFr}
              title={space.titleFr_image}
              width={600}
              height={600}
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-all duration-500" />
            <h3 className="absolute inset-0 flex items-center justify-center text-casa_background text-[30px] leading-[55px] font-lora tracking-wide italic px-14">
              {space.titleFr}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurSpaces;
