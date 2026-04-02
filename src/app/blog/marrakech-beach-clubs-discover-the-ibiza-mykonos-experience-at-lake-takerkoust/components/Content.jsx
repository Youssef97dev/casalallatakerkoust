import Image from "next/image";
import React from "react";
import Link from "next/link";

const Content = () => {
  return (
    <section
      id="blog" // Changed ID to be more keyword-relevant than just "blog"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
      aria-labelledby="main-heading"
    >
      <header>
        <h1
          id="main-heading"
          className="font-canela text-[35px] leading-[42px] text-casa_black mx-8 lg:mx-56"
        >
          Marrakech Beach Clubs: Discover the Ibiza & Mykonos Experience at Lake
          Takerkoust
        </h1>
        <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
          Trade the city pools for a breathtaking lakeside lounge bar that
          brings the ultimate Mediterranean party aesthetic to the Moroccan
          desert.
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 mt-8">
        {/* Left Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-takerkoust/agafay-desert-marrakech-restaurants.webp"
            alt="Fresh, locally sourced Moroccan breakfast spread at a luxury boutique lodge near Marrakech."
            width={500}
            height={500}
            priority // Added priority if this loads above the fold
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
          <Image
            src="/agafay-takerkoust/high-atlas-mountains-snow-peaks-marrakech.webp"
            alt="Enjoying traditional Moroccan mint tea on a sunlit terrace overlooking the Agafay Desert."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
        </div>

        {/* Center Content Column */}
        <article className="w-full flex flex-col justify-start items-start text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            When searching for the{" "}
            <strong>best beach clubs near Marrakech</strong>, affluent travelers
            often picture the crowded pools of the Palmeraie or busy city
            venues. However, the true pinnacle of daytime luxury lies 40
            kilometers southwest at Casa Lalla Takerkoust, where the vibrant
            energy of Ibiza style beach clubs in Marrakech meets the raw beauty
            of nature. Escaping the enclosed urban spaces, visitors are treated
            to an expansive, boho-chic haven that flawlessly replicates the
            exclusive, barefoot luxury found on the shores of the Mediterranean.
            It is the ultimate pool day pass alternative for those craving a
            chic, high-end escape with a panoramic backdrop.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            As a premier <strong>Mykonos style restaurant in Marrakech</strong>{" "}
            , Casa Lalla Takerkoust immerses guests in a visually stunning
            environment defined by elegant white-washed decor, natural rattan
            furnishings, and plush, comfortable sunbeds. The atmosphere is
            carefully curated with deep house and organic electronic music,
            setting the perfect rhythm for a relaxed yet sophisticated
            afternoon. Unlike traditional city beach clubs that look out over
            concrete walls, this luxury lounge bar in Morocco offers
            unobstructed, sweeping views of the shimmering lake and the majestic
            snow-capped Atlas Mountains.
          </p>

          <p className="text-[15px] leading-[25.5px] font-light text-casa_black mt-4">
            The experience is further elevated by a world-class culinary program
            that perfectly complements the boho chic dining{" "}
            <strong>Agafay vibe</strong>. Guests can transition seamlessly from
            sunbathing to savoring a refined menu of Mediterranean-fusion and
            traditional Moroccan dishes, all crafted with fresh, local
            ingredients. As golden hour approaches, the mixology team serves up
            premium sunset cocktails, making it the perfect transition from a
            high-energy daytime retreat into a stylish, romantic evening. Secure
            your reservation today to experience the definitive Mediterranean
            club atmosphere right in the heart of Morocco.
          </p>
        </article>

        {/* Right Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-takerkoust/elegant-table-setting-mediterranean-luxe.webp"
            alt="Gourmet culinary experience and elegant table setting at Casa Lalla Takerkoust."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
          <Image
            src="/agafay-takerkoust/meilleur-restaurant-ibiza.webp"
            alt="Thrilling quad biking and off-road buggy adventure through the Agafay Desert starting from Casa Lalla Takerkoust."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
