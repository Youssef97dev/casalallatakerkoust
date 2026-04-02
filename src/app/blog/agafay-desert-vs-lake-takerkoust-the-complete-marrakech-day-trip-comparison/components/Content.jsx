import Image from "next/image";
import React from "react";

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
          Agafay Desert vs Lake Takerkoust: The Complete Marrakech Day Trip
          Comparison
        </h1>
        <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
          Deciding between a rocky desert adventure and a tranquil lakeside
          retreat? Here is everything you need to know to plan the perfect
          excursion.
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 mt-8">
        {/* Left Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-gallery/chic-desert-oasis-design-mykonos-inspiration.webp"
            alt="Luxury boutique accommodation at Casa Lalla Takerkoust with panoramic views of the High Atlas Mountains."
            width={500}
            height={500}
            priority // Added priority if this loads above the fold
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
          <Image
            src="/agafay-gallery/luxury-dining-takerkoust-mykonos-style.webp"
            alt="Serene lakeside retreat and tranquil eco-lodge situated at Lalla Takerkoust near Marrakech."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
        </div>

        {/* Center Content Column */}
        <article className="w-full flex flex-col justify-start items-start text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            When planning the <strong>best excursions from Marrakech</strong>,
            travelers frequently face a difficult choice: the Agafay Desert vs
            Lalla Takerkoust. Both destinations are located less than an hour
            from the bustling city, yet they offer starkly different
            environments. An
            <strong>Agafay desert day trip</strong> immerses you in a rugged,
            lunar-like landscape of rolling stone hills, perfect for luxury
            tented camps and sunset camel rides. In contrast, Lalla Takerkoust
            provides a refreshing, cooling microclimate centered around a
            massive, shimmering blue artificial lake built in the 1920s to
            provide power to the region.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            The primary activities in each location cater to different types of
            adventure seekers. <strong>Marrakech desert tours in Agafay</strong>{" "}
            are heavily focused on terrestrial thrills, such as
            adrenaline-pumping ATV quad biking and dune buggy rides across the
            arid, rocky terrain. Meanwhile,{" "}
            <strong>Lalla Takerkoust activities</strong> are defined by the
            water, offering a rare Moroccan opportunity to go jet skiing,
            kayaking, and paddleboarding. While Agafay heats up quickly during
            the day, the lake offers a breezy, refreshing escape, making it a
            popular choice for tourists wanting to cool down after exploring the
            Medina.
          </p>

          <p className="text-[15px] leading-[25.5px] font-light text-casa_black mt-4">
            Fortunately, travelers do not actually have to choose between where
            to go in Agafay and the lake. Because Casa Lalla Takerkoust sits
            right at the geographical crossroads where the arid desert foothills
            meet the {"water's"} edge, it serves as the ultimate hybrid
            destination. You can easily spend your morning riding quads through
            the dramatic Agafay terrain before arriving at the lake for a
            sophisticated, Mediterranean-style lunch. By combining the raw,
            earthy beauty of the desert with the chic, refreshing atmosphere of
            a lakeside restaurant, you get the absolute best of both worlds in a
            single, seamless itinerary.
          </p>
        </article>

        {/* Right Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-gallery/restaurants-marocain-marrakech-garden.webp"
            alt="Authentic Moroccan hospitality and traditional riad-style architecture at the Casa Lalla Takerkoust oasis."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
          <Image
            src="/agafay-gallery/restaurants-marocain-marrakech-show.webp"
            alt="Relaxing outdoor swimming pool overlooking the breathtaking Lalla Takerkoust Lake and desert landscape."
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
