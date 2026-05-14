import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeSpaces } from "@/data/imageData";

const OurSpaces = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-[35px] leading-[42px] 2xl:text-[55px] 2xl:leading-[62px] font-canela text-casa_black mb-10">
        Our Spaces
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {HomeSpaces.map((space, index) => (
          <Link
            key={index}
            href={space.linkEn}
            className="relative group overflow-hidden shadow-md"
          >
            <Image
              src={space.image}
              alt={space.altEn}
              title={space.titleEn_image}
              loading="lazy"
              width={600}
              height={600}
              className="w-full h-[500px] 2xl:h-[800px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/40 transition-all duration-500" />
            <h3 className="absolute inset-0 flex items-center justify-center text-casa_background text-[35px] leading-[55px] 2xl:text-[55px] 2xl:leading-[75px] font-canela font-light tracking-wide italic px-14">
              {space.titleEn}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurSpaces;
