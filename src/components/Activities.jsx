import React from "react";
import Image from "next/image";
import Link from "next/link";

const Activities = () => {
  return (
    // 1. Used a semantic <section> instead of a generic <> or <div>
    <section className="relative w-full flex flex-col-reverse lg:block lg:h-[125vh] items-center justify-center gap-8 lg:gap-0">
      {/* --- TEXT CONTENT --- */}
      {/* 2. Unified layout: Flexbox for mobile, Absolute positioning for desktop */}
      <div className="z-20 w-[90%] lg:w-[43%] h-fit flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-5 p-5 lg:p-10 relative lg:absolute lg:right-[181px] lg:top-1/2 lg:-translate-y-1/2 bg-transparent lg:bg-[#EDE5D9]">
        {/* 3. Only ONE <h2> tag now exists in the DOM for better SEO */}
        <h2 className="font-canela text-[27px] leading-[32.4px] text-casa_black text-center lg:text-left">
          Casa Lalla producing unique member experiences
        </h2>

        {/* 4. Cleaned up unnecessary string literal concatenations */}
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black text-justify lg:text-left">
          <strong>Lalla Takerkoust</strong> is more than a picturesque
          destination — it’s a playground for adventure and exploration. Easily
          accessible by taxi or bus, visitors can dive straight into a variety
          of thrilling <strong>activities</strong>. Feel the adrenaline rush on
          a <strong>Quad</strong> or <strong>Buggy Tour</strong>, guided off the
          beaten path through the foothills of the{" "}
          <strong>High Atlas Mountains</strong>. Glide across the lake on a Jet
          Ski, taking in breathtaking views of the snow-capped peaks. Enjoy a
          peaceful Nature Walk or Hike along the {"lake’s"} serene waters,
          spotting unique flora and fauna, perfect for birdwatching and
          photography.
        </p>

        <p className="font-light text-[15px] leading-[25.5px] text-casa_black text-justify lg:text-left">
          Discover the landscape on Horseback Riding adventures or explore the{" "}
          <strong>Agafay Desert</strong> just 5 minutes away — ideal for{" "}
          <strong>quad</strong>, <strong>buggy</strong>, or{" "}
          <strong>camel excursions</strong>. For cycling enthusiasts, a{" "}
          <strong>Bike Tour</strong> through the <strong>desert</strong> leads
          to the crystal-clear oasis of <strong>Lalla Takerkoust</strong>,
          offering an unforgettable journey surrounded by the{" "}
          <strong>High Atlas Mountains</strong>. From thrilling adventures to
          tranquil escapes, <strong>Lalla Takerkoust</strong> promises
          experiences for every taste.
        </p>

        {/* 5. Added an aria-label for accessibility (boosts SEO scores) */}
        <Link
          href="/lalla-takerkoust-activities"
          className="font-canela italic text-[18px] leading-[25.5px] text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline mt-2 lg:mt-0"
          aria-label="Discover more activities and experiences at Lalla Takerkoust"
        >
          <span className="relative z-10">Discover More</span>
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
            aria-hidden="true"
          ></span>
        </Link>
      </div>

      {/* --- IMAGE CONTENT --- */}
      <div className="z-10 w-[90%] lg:w-[40%] h-[500px] lg:h-full relative lg:absolute lg:left-40">
        {/* 6. Used Next.js `fill` instead of hardcoded width/height to prevent layout shift and improve Core Web Vitals */}
        <Image
          src="/agafay-gallery/agafay-desert-buggy-tour-marrakech.webp"
          alt="Premium Agafay Desert buggy tour adventure offering a VIP luxury experience near our Mykonos-style day club in Marrakech"
          title="VIP Agafay Desert Buggy Tour & Luxury Day Club Experience"
          fill
          sizes="(max-width: 1024px) 90vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Activities;
